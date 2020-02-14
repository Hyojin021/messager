import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { SettingService } from 'src/pages/setting/services/setting/setting.service';
import { Extender } from 'src/shared/helpers/extender';
import { GalleryPickerComponent } from 'src/shared/modals/gallery-picker/gallery-picker.component';
import { ImagePreviewComponent } from 'src/shared/modals/image-preview/image-preview.component';
import { CommonService } from 'src/shared/services/common/common.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { CHAT_TYPES } from '../../models/message';
import { MessagesService } from '../../services/messages/messages.service';
import { setCORS } from "google-translate-api-browser";
/**
 * send messages between users. as a user, you can deactivate autoreply in setting page.
 * or remove autoreply method and all calls to it.
 * sending a message updates messages.message property with the latest message.
 * a function in firebase cloud functions checks every message update and sends a push notification to the device
 * check readme for info on cloud functions
 */
let MessageComponent = class MessageComponent extends Extender {
    constructor(injector, navParams, authService, commonService, firestoreService, messageService, settingService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.commonService = commonService;
        this.firestoreService = firestoreService;
        this.messageService = messageService;
        this.settingService = settingService;
        this.chat = [];
        this.chatType = CHAT_TYPES;
        this.textMsg = '';
        this.images = [];
        this.noDataconfig = {
            content: { title: 'Its quite here', description: 'start a conversation' }
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.sendLoading = false;
            this.toast(err);
        };
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.messageService.getMessage(this.navParams.get('data')).subscribe((msg) => {
                this.message = msg;
                this.chat = this.message.messages;
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
            const translate = setCORS("http://cors-anywhere.herokuapp.com/");
            /*
            // or
            import translate, { setCORS } from "google-translate-api-browser";
            setCORS("http://cors-anywhere.herokuapp.com/");
            */
            translate("안녕하세요", { to: "en" })
                .then(res => {
                // I do not eat six days
                console.log(res.text);
            })
                .catch(err => {
                console.error(err);
            });
        });
    }
    /** scroll to bottom when view loads with messages */
    ngAfterContentChecked() {
        this.scrollToBottom();
    }
    /**
     * used in template to retrieve details of receiving user for the message
     * if currentUser's id doesn't match another user in list, get the other users data as a recipient
     */
    getSender(message) {
        return message ? message.participants.find((user) => user.uid !== this.currentUser.uid) : null;
    }
    /**
     * used in template to retrieve details of receiving user for the message
     * if currentUser's id match another user in list, get the other users data as a recipient
     */
    getRecipient(message) {
        return message ? message.participants.find((user) => user.uid === this.currentUser.uid) : null;
    }
    /** call sender user */
    call() {
        this.commonService.callUser(this.getSender(this.message).mobile || this.getSender(this.message).phone, this.callNumber);
    }
    /** on message press show options is action sheet */
    onMessageHold(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (data.uid === this.currentUser.uid) {
                const actionSheet = yield this.actionSheetCtrl.create({
                    header: 'Chat Options',
                    buttons: [
                        {
                            text: 'Delete',
                            role: 'Destructive',
                            handler: () => {
                                this.messageService
                                    .deleteChat(this.message, data)
                                    .then(() => this.scrollToBottom())
                                    .catch((err) => this.failPromise(err));
                            }
                        },
                        {
                            text: 'Close',
                            role: 'cancel',
                            handler: () => { }
                        }
                    ]
                });
                yield actionSheet.present();
            }
        });
    }
    /** send message, update uid property of message, this is needed to find the sender id and send notifications to recipients via firebase cloud functions */
    send(text, images = null) {
        const data = {
            images,
            value: text,
            type: this.chatType.TEXT,
            sendAt: Date.now(),
            uid: this.currentUser.uid
        };
        this.sendLoading = true;
        if (text) {
            this.messageService
                .send(Object.assign({}, this.message), data)
                .then(() => {
                this.textMsg = '';
                this.sendLoading = false;
                // this.autoReply(messages[this.getRandomInt(1, 50)]);
            })
                .catch((err) => this.failPromise(err));
        }
    }
    /** for browser input file on change, run this method to get base64 string of files
     * and open gallery modal with the images
     */
    detectFiles(event) {
        this.commonService.getImagesFromFiles(event).then((images) => {
            this.openGallery(images);
        });
    }
    /**
     * open action sheet with photo upload options, either from camera or library
     * and run getPictures method
     */
    sendPhoto() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Send Images',
                buttons: [
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.getPictures(1);
                        }
                    },
                    {
                        text: 'Use Library',
                        handler: () => {
                            this.getPictures(0, true);
                        }
                    },
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    /** open preview image modal */
    preview(image) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.openModal(ImagePreviewComponent, image);
            modal.present();
        });
    }
    /** auto reply to message */
    /* public autoReply(text: any, images = null) {
       if (this.settingService.setting.autoReply === true) {
         setTimeout(() => {
           const data: IChat = {
             images,
             value: text,
             type: this.chatType.TEXT,
             sendAt: Date.now(),
             uid: this.getSender(this.message).uid
           };
           this.loading = true;
           this.messageService
             .send({ ...this.message }, data)
             .then(() => (this.loading = false))
             .catch((err) => this.failPromise(err));
         }, 6000);
       }
     }*/
    /**
     * scroll to bottom of chat
     */
    scrollToBottom() {
        const element = document.getElementById('last-item');
        if (element) {
            element.scrollIntoView({
                behavior: 'auto',
                block: 'end',
                inline: 'nearest'
            });
        }
    }
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     */
    getPictures(type, multiple = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let imageData = [];
            this.loading = true;
            if (window.cordova) {
                // if on device use native plugins
                imageData = yield this.commonService.getPictures(type, multiple);
                yield this.openGallery(imageData);
            }
            else {
                // if on device use browser file upload
                this.fileInputButton.nativeElement.click();
            }
        });
    }
    /** open gallery with image files, on dismiss modal, get images and upload them */
    openGallery(imageData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (imageData.length > 0) {
                const modal = yield this.openModal(GalleryPickerComponent, imageData, 'custom-modal');
                yield modal.present();
                const { data } = yield modal.onDidDismiss();
                if (data.images && data.images.length > 0) {
                    this.uploadImage(data.text, data.images);
                }
                else {
                    this.toast(this.translate.instant('message.component.no-images-selected'));
                }
            }
            this.fileInputButton.nativeElement.value = null;
        });
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    uploadImage(text, imageData) {
        this.images = imageData;
        const read$ = [];
        this.images.forEach((i) => {
            read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, 'chat-images'));
        });
        Promise.all(read$)
            .then((res) => {
            this.images = res;
            this.send(text, this.images);
            this.loading = false;
        })
            .catch((err) => this.failPromise(err));
    }
};
tslib_1.__decorate([
    ViewChild('content', null),
    tslib_1.__metadata("design:type", ElementRef)
], MessageComponent.prototype, "content", void 0);
tslib_1.__decorate([
    ViewChild('callNumber', null),
    tslib_1.__metadata("design:type", ElementRef)
], MessageComponent.prototype, "callNumber", void 0);
tslib_1.__decorate([
    ViewChild('fileInputButton', null),
    tslib_1.__metadata("design:type", ElementRef)
], MessageComponent.prototype, "fileInputButton", void 0);
MessageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-message',
        templateUrl: './message.component.html',
        styleUrls: ['./message.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        NavParams,
        AuthService,
        CommonService,
        FirestoreService,
        MessagesService,
        SettingService])
], MessageComponent);
export { MessageComponent };
//# sourceMappingURL=message.component.js.map