import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Platform } from '@ionic/angular';
import * as app from 'firebase/app';
import { tap } from 'rxjs/internal/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from '../firestore/firestore.service';
let FcmService = class FcmService extends Extender {
    constructor(injector, firebaseNative, authService, firestoreService, platform, afMessaging) {
        super(injector);
        this.injector = injector;
        this.firebaseNative = firebaseNative;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.platform = platform;
        this.afMessaging = afMessaging;
        try {
            const _messaging = app.messaging();
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        }
        catch (e) { }
    }
    // Get permission from the user
    getToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let token;
            if (window.cordova) {
                if (this.platform.is('android')) {
                    token = yield this.firebaseNative.getToken();
                    console.log('android', token);
                }
                if (this.platform.is('ios')) {
                    token = yield this.firebaseNative.getToken();
                    console.log('android', token);
                    yield this.firebaseNative.grantPermission();
                }
                return this.saveTokenToFirestore(token);
            }
            else {
                this.afMessaging.requestPermission.subscribe();
                return this.afMessaging.requestToken.subscribe((_token) => {
                    token = _token;
                    return this.saveTokenToFirestore(token);
                });
            }
        });
    }
    // Listen to incoming FCM messages
    listenToNotifications() {
        if (window.cordova) {
            return this.firebaseNative.onMessageReceived();
        }
        else {
            return this.afMessaging.messages.pipe(tap((msg) => {
                const body = msg.notification.body;
                this.toast(body);
            }));
        }
    }
    // Save the token to firestore
    saveTokenToFirestore(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            if (!token) {
                return;
            }
            if (uid) {
                const docData = {
                    token,
                    uid
                };
                return this.firestoreService.set(`fcm-devices/${token}`, docData);
            }
        });
    }
};
FcmService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        FirebaseX,
        AuthService,
        FirestoreService,
        Platform,
        AngularFireMessaging])
], FcmService);
export { FcmService };
//# sourceMappingURL=fcm.service.js.map