import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import * as firebase from 'firebase/app';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { isArray } from 'util';
/**
 * crud methods to interact with firebase cloud store regarding feed posts
 */
let FeedService = class FeedService extends Extender {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.feed = [];
    }
    get views() {
        return [
            {
                id: 1,
                icon: 'albums',
                name: this.translate.instant('feed-component.minimal'),
                active: true
            },
            {
                id: 2,
                icon: 'paper',
                name: this.translate.instant('feed-component.timeline')
            },
            {
                id: 3,
                icon: 'browsers',
                name: this.translate.instant('feed-component.showcase')
            },
            {
                id: 4,
                icon: 'cube',
                name: this.translate.instant('feed-component.modern')
            }
        ];
    }
    /** get feed from fire base cloud store, set default likes and comments array to empty array if not already set */
    getFeed(uid) {
        return this.firestoreService
            .colWithIds$(`feed`, (ref) => ref.orderBy('createdAt', 'desc').limit(50))
            .pipe(switchMap((_feed) => {
            const reads = [];
            this.feed = _feed.map((item) => {
                item.likes = !item.likes ? [] : item.likes;
                item.comments = !item.comments ? [] : item.comments;
                return item;
            });
            this.feed.forEach((item) => {
                reads.push(this.firestoreService.doc$(`users/${item.uid}`));
            });
            return combineLatest(reads);
        }), map((data) => {
            return (this.feed = this.feed.map((item, index) => {
                return Object.assign({}, item, { userLiked: item.likes && isArray(item.likes) ? item.likes.includes(uid) : false, user: data[index] || null });
            }));
        }));
    }
    getUserFeed(uid) {
        return this.firestoreService.colWithIds$(`feed`, (ref) => ref.where('uid', '==', uid));
    }
    /** get a single post from feed collection in firestore and join its user and comments */
    getPost(pid, uid) {
        let feed;
        return this.firestoreService.doc$(`feed/${pid}`).pipe(switchMap((_feed) => {
            _feed.likes = !_feed.likes ? [] : _feed.likes;
            _feed.comments = !_feed.comments ? [] : _feed.comments;
            feed = _feed;
            const docs = [];
            docs.push(this.firestoreService.doc$(`users/${feed.uid}`));
            docs.push(this.firestoreService.colWithIds$(`feed/${pid}/comments`, (ref) => ref.where('fid', '==', feed.id)));
            return combineLatest(docs);
        }), map((arr) => {
            const joins = ['user', 'comments'].reduce((acc, cur, idx) => {
                return Object.assign({}, acc, { [cur]: arr[idx] });
            }, {});
            return Object.assign({}, feed, joins, { userLiked: feed.likes && isArray(feed.likes) ? feed.likes.includes(uid) : false });
        }));
    }
    searchFeed(val) {
        const feed = [...this.feed];
        if (val && val.trim() !== '') {
            return feed.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.subtitle.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.content.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return this.feed;
        }
    }
    upsertPost(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.firestoreService.set(`feed/${post.id}`, post);
        });
    }
    delete(post) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.firestoreService.delete(`feed/${post.id}`);
        });
    }
    getComments(fid, uid) {
        return this.firestoreService
            .colWithIds$(`feed/${fid}/comments`, (ref) => ref.limit(20))
            .pipe(switchMap((_comment) => {
            const reads = [];
            this.comments = _comment;
            if (this.comments.length > 0) {
                this.comments.forEach((item) => {
                    reads.push(this.firestoreService.doc$(`users/${item.uid}`));
                });
                return combineLatest(reads);
            }
            else {
                return of([]);
            }
        }), map((data) => {
            return (this.comments = this.comments.map((item, index) => {
                return Object.assign({}, item, { user: data[index] || null });
            }));
        }));
    }
    searchComments(val) {
        const comments = [...this.comments];
        if (val && val.trim() !== '') {
            return comments.filter((item) => {
                return (item.text.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            return this.comments;
        }
    }
    upsertComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!comment.id) {
                comment.id = this.firestoreService.createId();
            }
            if (comment.user) {
                delete comment.user;
            }
            yield this.firestoreService.set(`feed/${comment.fid}/comments/${comment.id}`, comment);
            return this.firestoreService.update(`feed/${comment.fid}`, {
                comments: firebase.firestore.FieldValue.arrayUnion(comment.id)
            });
        });
    }
    deleteComment(comment) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.firestoreService.delete(`feed/${comment.fid}/comments/${comment.id}`);
            return this.firestoreService.update(`feed/${comment.fid}`, {
                comments: firebase.firestore.FieldValue.arrayRemove(comment.id)
            });
        });
    }
    like(feed) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            if (!feed.userLiked) {
                this.firestoreService.update(`feed/${feed.id}`, {
                    likes: firebase.firestore.FieldValue.arrayUnion(uid)
                });
            }
            else {
                this.firestoreService.update(`feed/${feed.id}`, {
                    likes: firebase.firestore.FieldValue.arrayRemove(uid)
                });
            }
        });
    }
};
FeedService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], FeedService);
export { FeedService };
//# sourceMappingURL=feed.service.js.map