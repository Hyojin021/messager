import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { MessagesService } from '../../services/messages/messages.service';
import { MessageComponent } from '../message/message.component';
/**
 * view users messages, manage messages.
 */
let MessagesComponent = class MessagesComponent extends Extender {
    constructor(injector, authService, messageService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
        this.allMessages = [];
        this.messages = [];
        this.getSelection = false;
        this.openSearch = false;
        this.view$ = new Subject();
        /** get tab data to use as input for app-tab-menu component */
        this.views = [
            {
                id: 0,
                active: true,
                name: this.translate.instant('messages-component.tab-all'),
                event: () => {
                    this.view$.next(false);
                }
            },
            {
                id: 2,
                name: this.translate.instant('messages-component.tab-archived'),
                event: () => {
                    this.view$.next(true);
                }
            }
        ];
    }
    /**
     * subscribe to view change events from tab component changes,
     * create a switch map to get data based on view change
     * if isArchieved view is clicked show archieved messages
     * emit event for no archieved messages on initialization
     */
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const queryObservable = this.view$.pipe(switchMap((view) => this.messageService.getMessages(this.currentUser.uid, view)));
            this.subscriptions.push(queryObservable.subscribe((queryItems) => {
                this.messages = this.allMessages = queryItems;
            }));
            this.view$.next(false);
        });
    }
    /** on view enter, if route contains an id, open chat belonging to that id in a modal straight away */
    ionViewDidEnter() {
        const messageId = this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.id;
        if (messageId) {
            this.openChat(messageId);
        }
    }
    /** search messages by participant name */
    onSearch(val) {
        if (val && val.trim() !== '') {
            this.messages = this.allMessages.filter((item) => {
                return item.participants.find((user) => user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.messages = this.allMessages;
        }
    }
    /** used in template to retrieve details of receiving user for the message
     * if currentUser's id doesn't match another user in list, get the other users data as a recipient
     */
    getSender(message) {
        return message.participants.find((user) => user.uid !== this.currentUser.uid);
    }
    /** get last message sent in conversation or default to start chatting */
    getLastMessage(message) {
        return message.messages && message.messages.length > 0 ? message.messages[message.messages.length - 1] : null;
    }
    /** open chat in a model */
    openChat(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(MessageComponent, message);
            modal.present();
        });
    }
    /** action sheet with options for a single chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    options(chat) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('messages-component.manage-chat'),
                buttons: [
                    {
                        text: this.translate.instant('messages-component.mark-as-read'),
                        handler: () => {
                            chat.isRead = true;
                            this.messageService.updateMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.archieved'),
                        handler: () => {
                            chat.isArchieved = true;
                            this.messageService.updateMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.delete'),
                        handler: () => {
                            this.messageService.deleteMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            asCtrl.present();
        });
    }
    /** action sheet with options for selected chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    messagesOptions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const asCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('messages-component.manage-messages'),
                buttons: [
                    {
                        text: this.translate.instant('messages-component.select'),
                        handler: () => {
                            this.getSelection = true;
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.select-all'),
                        handler: () => {
                            this.selectAll();
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.delete-all'),
                        handler: () => {
                            this.messageService.deleteAllMessages(this.messages.length);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            asCtrl.present();
        });
    }
    /** mark multiple selected messages as read */
    markAsRead() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            item.isRead = true;
            this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    }
    /** archive multiple messages */
    archieve() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            item.isArchieved = true;
            this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    }
    /** delete selected messages */
    deleteSelected() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            this.messageService.deleteMessage(item);
        });
        this.getSelection = false;
    }
    /** select all messages */
    selectAll() {
        this.getSelection = true;
        this.messages.map((message) => {
            message.selected = true;
            return message;
        });
    }
};
MessagesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-messages',
        templateUrl: './messages.component.html',
        styleUrls: ['./messages.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, MessagesService])
], MessagesComponent);
export { MessagesComponent };
//# sourceMappingURL=messages.component.js.map