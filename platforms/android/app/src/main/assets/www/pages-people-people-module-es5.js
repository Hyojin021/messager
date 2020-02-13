(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-people-people-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/people/people.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'people-component.title' | translate }}\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    <app-tab-menu [tabs]=\"views\" (event)=\"showList($event)\"></app-tab-menu>\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\n\n    <div class=\"wrapper\" *ngIf=\"groupedPeople.length > 0\">\n      <div class=\"content-scroll\" #content>\n        <div class=\"group\" *ngFor=\"let group of groupedPeople\">\n          <div class=\"title\" [id]=\"group.letter\">{{ group.letter }}</div>\n          <div class=\"contact\" *ngFor=\"let contact of group.people; let i = index\">\n            <div class=\"image\" [image-loader]=\"contact.photoURL\" (click)=\"open(contact.uid)\"></div>\n            <div class=\"detail\" (click)=\"open(contact.uid)\">\n              <div class=\"name\">{{ contact.displayName }}</div>\n              <div class=\"city\" *ngIf=\"contact.town\">{{ contact.town }}</div>\n              <div class=\"country\" *ngIf=\"contact.country\">{{ contact.country }}</div>\n            </div>\n\n            <div class=\"more\">\n              <ion-button *ngIf=\"isFriend(contact.uid)\" size=\"small\" fill=\"clear\" shape=\"round\" (click)=\"openMore(contact)\">\n                <ion-icon name=\"more\"></ion-icon>\n              </ion-button>\n              <ion-button *ngIf=\"!isFriend(contact.uid)\" class=\"follow-btn\" size=\"small\" shape=\"round\" (click)=\"manage(contact)\">\n                {{ 'people-component.follow' | translate }}\n              </ion-button>\n            </div>\n\n            <a hidden #callNumber href=\"tel:+{{ contact.mobile || contact.phone }}\"></a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"link-alpha\">\n        <li class=\"alpha-link-item\" *ngFor=\"let item of alpha\" (click)=\"scrollTo(item)\">{{ item }}</li>\n      </div>\n    </div>\n    <app-no-data *ngIf=\"groupedPeople.length === 0\"> </app-no-data>\n  </div>\n</ion-content>\n\n<app-spinner *ngIf=\"loading\"></app-spinner>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/person/person.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"wrapper\">\n      <div class=\"content-scroll\" *ngIf=\"user\">\n        <!-- profile image -->\n        <div class=\"profile-image\" [image-loader]=\"user.photoURL\">\n          <!-- show if following -->\n          <ion-fab slot=\"fixed\" *ngIf=\"isFriend\">\n            <ion-fab-button>\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-list side=\"bottom\">\n              <ion-fab-button>\n                <ion-icon (click)=\"call()\" src=\"assets/icons/phone-call.svg\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button>\n                <ion-icon (click)=\"chat()\" src=\"assets/icons/message-square.svg\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-button>\n                <ion-icon (click)=\"share()\" src=\"assets/icons/share-2.svg\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab-list>\n          </ion-fab>\n\n          <!-- show if not following -->\n          <ion-button *ngIf=\"!isFriend\" class=\"follow\" (click)=\"manage()\">{{ 'person-component.follow' | translate }}</ion-button>\n        </div>\n\n        <!-- profile details -->\n        <div class=\"profile-detail\">\n          <div class=\"name\">{{ user.displayName }}</div>\n\n          <div class=\"country\">{{ user.country }}</div>\n\n          <div class=\"status\">\n            {{\n              user.statusMessage ||\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis maximus ligula, quis luctus neque. Integer eu efficitur urna. Quisque rhoncus non est eu tristique.'\n            }}\n          </div>\n          <div class=\"email\"><ion-icon src=\"assets/icons/mail.svg\"></ion-icon>{{ user.email }}</div>\n          <div class=\"phone\">\n            <ion-icon src=\"assets/icons/phone.svg\"></ion-icon>{{ user.mobile || user.phone || 'misc.no-data' | translate }}\n          </div>\n          <div class=\"town\"><ion-icon src=\"assets/icons/map-pin.svg\"></ion-icon>{{ user.town || 'misc.no-data' | translate }}</div>\n        </div>\n\n        <!-- call user with hidden a tag -->\n        <a hidden #callNumber href=\"tel:+{{ user.mobile || user.phone }}\"></a>\n      </div>\n\n      <ion-button fill=\"clear\" (click)=\"closeModal()\">\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: 100% !important;\n  width: 100%;\n  overflow: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .wrapper .content-scroll .group .title {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0 5px 30px;\n  text-transform: uppercase;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact {\n  margin: 5px 20px 5px 0;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 10px 10px 15px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .image {\n  width: 55px;\n  height: 55px;\n  border-radius: 6px;\n  background-size: cover !important;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail {\n  padding: 0 10px 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .name {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .city,\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .more .follow-btn {\n  width: 55px;\n  font-size: 10px;\n}\n:host .content-wrapper .wrapper .link-alpha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-right: 15px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .wrapper .link-alpha .alpha-link-item {\n  list-style-type: none;\n  font-size: 11px;\n  margin: 0 0 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXHBlb3BsZVxcY29tcG9uZW50c1xccGVvcGxlXFxwZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUo7QURFTTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QUNBUjtBREVRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQVY7QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hOO0FESU07RUFDRSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRlI7QURHUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0RWO0FER1U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0FDRFo7QURJVTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGWjtBRElZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EscURBQUE7QUNGZDtBREtZO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNIZDtBREtjO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIaEI7QURNYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURPYzs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0xoQjtBRFFjO0VBQ0UscUNBQUE7QUNOaEI7QURXYztFQUNFLFdBQUE7RUFDQSxlQUFBO0FDVGhCO0FEZ0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2RSO0FEZVE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2JWIiwiZmlsZSI6InNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuY29udGVudC13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuaGVhZGVyIHtcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgc21hbGwge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAuY29udGVudC1zY3JvbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDVweCAzMHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4IDVweCAwO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDE1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5qb2Ige1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuY2l0eSxcbiAgICAgICAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jb3VudHJ5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb3JlIHtcbiAgICAgICAgICAgICAgLmZvbGxvdy1idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGluay1hbHBoYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC5hbHBoYS1saW5rLWl0ZW0ge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXB4IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHNtYWxsIHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3Qge1xuICBtYXJnaW46IDVweCAyMHB4IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuaW1hZ2Uge1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLmpvYiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuY2l0eSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuY291bnRyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLm1vcmUgLmZvbGxvdy1idG4ge1xuICB3aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAubGluay1hbHBoYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5saW5rLWFscGhhIC5hbHBoYS1saW5rLWl0ZW0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwIDAgMXB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.ts ***!
  \****************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../person/person.component */ "./src/pages/people/components/person/person.component.ts");









/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
var PeopleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeopleComponent, _super);
    function PeopleComponent(injector, authService, messageService, peopleService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.commonService = commonService;
        /** group contacts by first letter of their first names */
        _this.groupedPeople = [];
        /** stores string array of alphabets */
        _this.alpha = [];
        /** stores tabbed views properties */
        _this.views = [];
        /** toggles search bar in template */
        _this.openSearch = false;
        _this.selectedIndex = 0;
        _this.alpha = _this.peopleService.alpha;
        _this.views = _this.peopleService.views;
        return _this;
    }
    /** get currentUser, get users friends ids and get all users from user collection */
    PeopleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loading = true;
                        this.openProfileFromUrl();
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.subscriptions.push(this.peopleService.getFriendIds(this.currentUser.uid).subscribe(function (ids) { return (_this.friends = ids); }));
                        this.subscriptions.push(this.peopleService.getPeople(this.currentUser.uid).subscribe(function (users) {
                            _this.list = users;
                            _this.loading = false;
                            _this.showList(_this.selectedIndex);
                        }, function (err) {
                            _this.loading = false;
                            _this.toast(err);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    PeopleComponent.prototype.openProfileFromUrl = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                _this.open(param.id);
            }
        }));
    };
    /** search list of users by name and regroup into alphabet categories */
    PeopleComponent.prototype.onSearch = function (val) {
        var people;
        if (val && val.trim() !== '') {
            people = this.list.filter(function (item) {
                return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            people = this.list.slice();
        }
        this.groupedPeople = this.peopleService.groupPeople(people);
    };
    /** show either friends or all people based on tab selection */
    PeopleComponent.prototype.showList = function (index) {
        var _this = this;
        this.selectedIndex = index;
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
        }
        else {
            var friends = this.list.filter(function (user) { return (_this.friends && _this.friends.length > 0 ? _this.friends.includes(user.uid) : null); });
            this.groupedPeople = this.peopleService.groupPeople(friends);
        }
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    PeopleComponent.prototype.manage = function (friend) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(this.friends) && this.friends.includes(friend.uid))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(friend.uid)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(friend.uid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.showList(this.selectedIndex);
                        return [2 /*return*/];
                }
            });
        });
    };
    PeopleComponent.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(this.friends) && this.friends.includes(fid);
    };
    /** open a persons profile */
    PeopleComponent.prototype.open = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"], uid, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open action sheet with options for a person selection */
    PeopleComponent.prototype.openMore = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('people-component.unfollow'),
                                    handler: function () {
                                        _this.manage(contact);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.open'),
                                    handler: function () {
                                        _this.open(contact.uid);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.call'),
                                    handler: function () {
                                        _this.commonService.callUser(contact.mobile || contact.phone, _this.callNumber);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.chat'),
                                    handler: function () {
                                        _this.messageService.startChat(contact);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.cancel'),
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheetCtrl = _a.sent();
                        return [4 /*yield*/, actionSheetCtrl.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** scroll user to user group category */
    PeopleComponent.prototype.scrollTo = function (item) {
        var element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
        { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "callNumber", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/pages/people/components/people/people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], PeopleComponent);
    return PeopleComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/people/components/person/person.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 80%;\n  height: 80%;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .wrapper {\n  height: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 45px);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image {\n  height: 260px;\n  width: 100%;\n  margin: auto;\n  position: relative;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image ion-fab {\n  position: absolute;\n  right: 10px;\n  bottom: -28px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image .follow {\n  position: absolute;\n  right: 10px;\n  bottom: -20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: var(--ion-color-light);\n  padding: 20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .name {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .status {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n  margin: 5px 0;\n  padding: 0 0 15px;\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.4);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town {\n  font-size: 13px;\n  margin: 2px 0;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town ion-icon {\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .country {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZXJzb24vQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXHBlb3BsZVxcY29tcG9uZW50c1xccGVyc29uXFxwZXJzb24uY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7QURFSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ0FOO0FEQ007RUFDRSxZQUFBO0FDQ1I7QURBUTtFQUNFLHlCQUFBO0FDRVY7QURBVTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNHZDtBRERZO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dkO0FEQ1U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7QUNDWjtBREFZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRWQ7QURBWTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtEQUFBO0FDRWQ7QURBWTs7O0VBR0UsZUFBQTtFQUNBLGFBQUE7QUNFZDtBRERjOzs7RUFDRSxrQkFBQTtBQ0toQjtBREZZO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FDSWQiLCJmaWxlIjoic3JjL3BhZ2VzL3Blb3BsZS9jb21wb25lbnRzL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICBtYXJnaW46IDIwJSBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAuY29udGVudC1zY3JvbGwge1xuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XG5cbiAgICAgICAgICAucHJvZmlsZS1pbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBpb24tZmFiIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgYm90dG9tOiAtMjhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb2xsb3cge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9maWxlLWRldGFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZW1haWwsXG4gICAgICAgICAgICAucGhvbmUsXG4gICAgICAgICAgICAudG93biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiAyMCUgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDVweCk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1pbWFnZSB7XG4gIGhlaWdodDogMjYwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWltYWdlIGlvbi1mYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IC0yOHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtaW1hZ2UgLmZvbGxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogLTIwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5zdGF0dXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgcGFkZGluZzogMCAwIDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAuZW1haWwsXG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnBob25lLFxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC50b3duIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDJweCAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5lbWFpbCBpb24taWNvbixcbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAucGhvbmUgaW9uLWljb24sXG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnRvd24gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLmNvdW50cnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/people/components/person/person.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");








/**
 * view users profile and call, follow, unfollow share or chat to user
 */
var PersonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PersonComponent, _super);
    function PersonComponent(injector, navParams, authService, peopleService, messageService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.peopleService = peopleService;
        _this.messageService = messageService;
        _this.commonService = commonService;
        return _this;
    }
    /** get current user, get user to view by getting id from nav param */
    PersonComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, uid, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _c.sent();
                        uid = this.navParams.get('data');
                        _b = this;
                        return [4 /*yield*/, this.peopleService.getPerson(uid)];
                    case 2:
                        _b.user = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** call user */
    PersonComponent.prototype.call = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** chat to user */
    PersonComponent.prototype.chat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.startChat(this.user);
                this.closeModal();
                return [2 /*return*/];
            });
        });
    };
    /** share user */
    PersonComponent.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "people?id=" + this.user.uid;
                        return [4 /*yield*/, this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(PersonComponent.prototype, "isFriend", {
        /** getter to check if user is a friend */
        get: function () {
            return this.peopleService.friends.includes(this.user.uid);
        },
        enumerable: true,
        configurable: true
    });
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    PersonComponent.prototype.manage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.peopleService.friends.includes(this.user.uid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(this.user.uid)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(this.user.uid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PersonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PersonComponent.prototype, "callNumber", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/pages/people/components/person/person.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], PersonComponent);
    return PersonComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/people/people.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/people/people.module.ts ***!
  \*******************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people/people.component */ "./src/pages/people/components/people/people.component.ts");
/* harmony import */ var _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person/person.component */ "./src/pages/people/components/person/person.component.ts");







var PeopleModule = /** @class */ (function () {
    function PeopleModule() {
    }
    PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"], _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"],
                    },
                    {
                        path: ':id',
                        component: _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"],
                    },
                ]),
            ],
        })
    ], PeopleModule);
    return PeopleModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-people-people-module-es5.js.map