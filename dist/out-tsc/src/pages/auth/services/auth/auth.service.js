import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase/app';
import { of } from 'rxjs/internal/observable/of';
import { first, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Extender } from 'src/shared/helpers/extender';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { SocialAuthProvider } from '../../helpers/constants';
/**
 * firebase authentication methods are handled by this service
 * email handlers https://firebase.google.com/docs/auth/custom-email-handler
 * authentication tutorial https://www.positronx.io/full-angular-7-firebase-authentication-system/
 */
let AuthService = class AuthService extends Extender {
    constructor(injector, afAuth, gplus, facebook, firestoreService) {
        super(injector);
        this.injector = injector;
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.facebook = facebook;
        this.firestoreService = firestoreService;
        /** watch auth state if user is logged in, get user info from users list as observable else return observable null */
        this.user = this.afAuth.authState.pipe(switchMap((user) => {
            if (user) {
                return this.firestoreService.doc$(`users/${user.uid}`);
            }
            else {
                return of(null);
            }
        }));
    }
    /** get user and return as a promise to access easily in components using async and await */
    getUser() {
        return this.user.pipe(first()).toPromise();
    }
    /** sign in user with email and password using firebase library */
    signIn({ email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
        });
    }
    /** sign up user to firebase and update user details */
    signUp({ displayName, email, password }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const credential = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            yield credential.user.updateProfile({ displayName, photoURL: null });
            return this.updateUserData(credential.user);
        });
    }
    /** send email verification to authenticated user */
    sendEmailVerification() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.currentUser.sendEmailVerification();
        });
    }
    /** use by email verification to apply verification code and set user emailVerified property to true */
    applyActionCode(code) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.applyActionCode(code);
        });
    }
    /** update user email in auth and in users list */
    updateEmail(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUser();
            user.email = email;
            yield this.firestoreService.set(`users/${user.uid}`, user);
            return yield firebase.auth().currentUser.updateEmail(email);
        });
    }
    /** update user password */
    updatePassword(oldPassword, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = firebase.auth().currentUser;
            const credential = firebase.auth.EmailAuthProvider.credential(firebase.auth().currentUser.email, oldPassword);
            return user.reauthenticateAndRetrieveDataWithCredential(credential).then(() => {
                return firebase.auth().currentUser.updatePassword(password);
            });
        });
    }
    /** send password reset email */
    sendPasswordReset(email) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.sendPasswordResetEmail(email);
        });
    }
    /** get user emailVerified property */
    get emailVerified() {
        return this.afAuth.auth.currentUser && this.afAuth.auth.currentUser.emailVerified;
    }
    /** confirm password reset with code from email verification and password */
    confirmPasswordReset(code, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.confirmPasswordReset(code, password);
        });
    }
    /** select type of social login, either facebook or google, use native login with cordova plugins if on device or web login
     * on browser. on complete update user details
     */
    socialogin(providerType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let credential;
            if (window.cordova) {
                credential = yield this.nativeLogin(providerType);
            }
            else {
                credential = yield this.webLogin(providerType);
            }
            return yield this.updateUserData(credential.user);
        });
    }
    /** sign out of the app and after sign out destroy all subscriptions to avoid missing permissions error */
    signOut() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.afAuth.auth.signOut().then(() => {
                // this.forceSubscriptionDestroy();
            });
        });
    }
    /** update user details in users list */
    updateUserData({ uid, email, displayName, photoURL }) {
        const data = {
            uid,
            email,
            displayName,
            photoURL
        };
        return this.firestoreService.set(`users/${uid}`, data);
    }
    /** do a native login with cordova plugins for google or facebook,
     * specify by providerType with is an enum of providers
     * get token from successful native login and use with firebase library to login with token.
     */
    nativeLogin(providerType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let cred;
            if (providerType === SocialAuthProvider.google) {
                cred = yield this.gplus.login({
                    webClientId: environment.googleClientId,
                    offline: true,
                    scopes: 'profile email'
                });
                return this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(cred.idToken));
            }
            else {
                cred = yield this.facebook.login(['public_profile']);
                return this.afAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider.credential(cred.authResponse.accessToken));
            }
        });
    }
    /** do web login for third party providers, specify providerType */
    webLogin(providerType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let provider;
            if (providerType === SocialAuthProvider.google) {
                provider = new firebase.auth.GoogleAuthProvider();
            }
            else {
                provider = new firebase.auth.FacebookAuthProvider();
            }
            return yield this.afAuth.auth.signInWithPopup(provider);
        });
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AngularFireAuth,
        GooglePlus,
        Facebook,
        FirestoreService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map