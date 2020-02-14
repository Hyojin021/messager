import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { Extender } from 'src/shared/helpers/extender';
import { ChangePasswordComponent } from 'src/shared/modals/change-password/change-password.component';
import { EditProfileComponent } from 'src/shared/modals/edit-profile/edit-profile.component';
import { FeedbackComponent } from 'src/shared/modals/feedback/feedback.component';
import { LangSelectComponent } from 'src/shared/modals/lang-select/lang-select.component';
import { NotificationSettingsComponent } from 'src/shared/modals/notification-settings/notification-settings.component';
import { PrivacyComponent } from 'src/shared/modals/privacy/privacy.component';
import { ReviewComponent } from 'src/shared/modals/review/review.component';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
/**
 * crud methods to interact with firebase cloud store regarding settings
 */
let SettingService = class SettingService extends Extender {
    constructor(injector, authservice, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authservice = authservice;
        this.firestoreService = firestoreService;
        this.settingsOptions = new BehaviorSubject([]);
    }
    getUserSettings(uid) {
        return this.firestoreService.doc$(`preferences/${uid}`).pipe(tap((data) => {
            if (!data.uid) {
                data = { autoReply: true, hideWalkthrough: false, uid, language: 'gb', inAppNotifications: true, messagePreview: true };
                this.upsertPreferences(data);
            }
            this.setting = data;
            this.getSettingOptions(this.setting);
            return data;
        }));
    }
    upsertPreferences(setting) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.firestoreService.upsert(`preferences/${setting.uid}`, setting);
        });
    }
    getSettingOptions(preference) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.settingsOptions.next([
                {
                    title: this.translate.instant('setting-component.option-general-title'),
                    open: true,
                    items: [
                        {
                            icon: 'assets/icons/eye-off.svg',
                            text: this.translate.instant('setting-component.option-general-1-text'),
                            description: this.translate.instant('setting-component.option-general-1-description'),
                            checkbox: true,
                            selected: this.setting.hideWalkthrough,
                            event: (data) => {
                                this.setting.hideWalkthrough = data;
                            }
                        },
                        {
                            icon: 'assets/icons/message-square.svg',
                            text: this.translate.instant('setting-component.option-general-2-text'),
                            description: this.translate.instant('setting-component.option-general-2-description'),
                            checkbox: true,
                            selected: this.setting.autoReply,
                            event: (data) => {
                                this.setting.autoReply = data;
                            }
                        },
                        {
                            icon: `assets/images/flags/${this.setting.language || 'gb'}.svg`,
                            text: this.translate.instant('setting-component.option-general-3-text'),
                            description: this.translate.instant('setting-component.option-general-3-description'),
                            event: (data) => {
                                this.openPage(LangSelectComponent, data);
                            }
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-account-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/user.svg',
                            text: this.translate.instant('setting-component.option-account-1-text'),
                            description: this.translate.instant('setting-component.option-account-1-description'),
                            event: (data) => this.openPage(EditProfileComponent, data)
                        },
                        {
                            icon: 'assets/icons/lock.svg',
                            text: this.translate.instant('setting-component.option-account-2-text'),
                            description: this.translate.instant('setting-component.option-account-2-description'),
                            event: (data) => this.openPage(ChangePasswordComponent, data)
                        },
                        {
                            icon: 'assets/icons/alert-octagon.svg',
                            text: this.translate.instant('setting-component.option-account-3-text'),
                            description: this.translate.instant('setting-component.option-account-3-description'),
                            event: (data) => this.deactivateAccount()
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-notification-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/bell.svg',
                            text: this.translate.instant('setting-component.option-notification-1-text'),
                            description: this.translate.instant('setting-component.option-notification-1-description'),
                            event: (data) => this.openPage(NotificationSettingsComponent, data)
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-more-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/heart.svg',
                            text: this.translate.instant('setting-component.option-more-1-text'),
                            description: this.translate.instant('setting-component.option-more-1-description'),
                            event: (data) => this.openPage(ReviewComponent, data)
                        },
                        {
                            icon: 'assets/icons/mail.svg',
                            text: this.translate.instant('setting-component.option-more-2-text'),
                            description: this.translate.instant('setting-component.option-more-2-description'),
                            event: (data) => this.openPage(FeedbackComponent, data)
                        },
                        {
                            icon: 'assets/icons/eye-off.svg',
                            text: this.translate.instant('setting-component.option-more-3-text'),
                            description: this.translate.instant('setting-component.option-more-3-description'),
                            event: (data) => this.openPage(PrivacyComponent, data)
                        }
                    ]
                }
            ]);
        });
    }
    openPage(component, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(component, data);
            modal.present();
        });
    }
    /**
     * deactivate user account by adding deactivate is true to user property,
     * navigate to account deactivated page
     */
    deactivateAccount() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: this.translate.instant('setting-component.deactivated-account-alert-title'),
                message: this.translate.instant('setting-component.deactivated-account-alert-message'),
                buttons: [
                    {
                        text: this.translate.instant('other.no'),
                        role: 'cancel'
                    },
                    {
                        text: this.translate.instant('other.yes'),
                        handler: () => {
                            this.deactivate();
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    deactivate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authservice.getUser();
            this.loading = true;
            user.deactivated = true;
            this.firestoreService
                .update(`users/${user.uid}`, user)
                .then(() => {
                this.loading = false;
                this.authservice.signOut();
                this.goto(this.routes.deactivated);
                this.toast(this.translate.instant('setting-component.deactivate-account-success-message'));
            })
                .catch((err) => this.toast(err));
        });
    }
};
SettingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, AuthService, FirestoreService])
], SettingService);
export { SettingService };
//# sourceMappingURL=setting.service.js.map