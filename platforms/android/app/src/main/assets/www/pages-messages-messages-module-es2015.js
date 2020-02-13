(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/message/message.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/message/message.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-button size=\"small\" color=\"dark\" (click)=\"closeModal(null, routes.messages)\">\n        <ion-icon src=\"assets/icons/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\" (click)=\"call()\">\n        <ion-icon src=\"assets/icons/phone.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title\n      ><span>\n        <div class=\"title-img\" [image-loader]=\"getSender(message)?.photoURL\"></div>\n        {{ getSender(message)?.displayName }}\n      </span></ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"content-wrapper\" *ngIf=\"currentUser\">\n    <ng-container *ngIf=\"message && message.messages && message.messages.length\">\n      <div\n        [id]=\"last ? 'last-item' : 'item' + i\"\n        *ngFor=\"let item of message.messages; let i = index; let last = last\"\n        (press)=\"onMessageHold(item)\"\n      >\n        <div [ngClass]=\"item.uid === currentUser.uid ? 'from-me' : 'from-them'\">\n          <!-- message image -->\n          <div\n            class=\"image\"\n            (click)=\"preview(item.images[0])\"\n            *ngIf=\"item.images && item.images.length === 1\"\n            [image-loader]=\"item.images[0]\"\n          ></div>\n\n          <!-- message image group -->\n          <div class=\"image-group\" *ngIf=\"item.images && item.images.length > 1\">\n            <div class=\"image-group-image\" (click)=\"preview(image)\" *ngFor=\"let image of item.images\" [image-loader]=\"image\"></div>\n          </div>\n\n          <!-- message content -->\n          <div\n            *ngIf=\"item.value\"\n            class=\"text\"\n            [innerHTML]=\"item.value.length > 100 && !item.readMore ? (item.value | slice: 0:100) : (item.value | markdown)\"\n          >\n            <!-- read more anchor link -->\n            <small>\n              <a *ngIf=\"item.value && item.value.length > 100\" (click)=\"item.readMore = !item.readMore\">\n                {{ 'message-component.read-more' | translate }}\n              </a>\n            </small>\n          </div>\n        </div>\n\n        <div class=\"clear\"></div>\n      </div>\n    </ng-container>\n\n    <app-no-data [config]=\"noDataconfig\" *ngIf=\"message && message.messages && message.messages.length === 0\"> </app-no-data>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"custom-form\">\n    <ion-buttons slot=\"start\">\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"sendPhoto()\">\n        <ion-icon src=\"assets/icons/camera.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <textarea\n      autosize\n      maxrow=\"4\"\n      useImportant=\"true\"\n      name=\"message\"\n      placeholder=\"{{ 'message-component.placeholder' | translate }}\"\n      [(ngModel)]=\"textMsg\"\n    ></textarea>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"send(textMsg)\">\n        <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <app-spinner *ngIf=\"loading\"></app-spinner> -->\n\n<!-- required for browser file upload -->\n<input hidden #fileInputButton type=\"file\" (change)=\"detectFiles($event)\" multiple />\n\n<!-- call user with hidden a tag -->\n<a hidden #callNumber href=\"tel:+{{ getSender(message)?.mobile || getSender(message)?.phone }}\"></a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/messages/messages.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <!-- start header -->\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'messages-component.title' | translate }}\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"messagesOptions()\">\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n    <!-- end header -->\n\n    <app-tab-menu [tabs]=\"views\"></app-tab-menu>\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\n\n    <!-- show messages -->\n    <div class=\"content-scroll\" *ngIf=\"messages.length > 0\">\n      <div class=\"messages\" *ngFor=\"let item of messages\">\n        <!-- selected icon toggle -->\n        <div class=\"action\" *ngIf=\"getSelection\">\n          <ion-icon\n            color=\"secondary\"\n            (click)=\"item.selected = !item.selected\"\n            [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\n          ></ion-icon>\n        </div>\n\n        <!-- image of receipeint -->\n        <div\n          class=\"image\"\n          [image-loader]=\"getSender(item).photoURL\"\n          (click)=\"goto(routes.people, { queryParams: { id: getSender(item).uid } })\"\n        ></div>\n\n        <!-- details of chat -->\n        <div class=\"detail\" (click)=\"openChat(item.id)\">\n          <div class=\"name\">{{ getSender(item).displayName }}</div>\n          <div class=\"msg\">{{ getLastMessage(item)?.value || 'messages-component.start-chatting' | translate }}</div>\n        </div>\n\n        <!--  date and actions button -->\n        <div class=\"date\">\n          <span>{{ item?.updatedAt?.toDate() | amTimeAgo }}</span>\n          <ion-button fill=\"clear\" *ngIf=\"!getSelection\" (click)=\"options(item)\" color=\"medium\" size=\"small\">\n            <ion-icon name=\"more\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n\n    <app-no-data *ngIf=\"messages.length === 0\"></app-no-data>\n  </div>\n</ion-content>\n\n<!-- footer with buttons when you select more than one item -->\n<ion-footer *ngIf=\"getSelection\">\n  <div class=\"buttons\">\n    <ion-button size=\"small\" (click)=\"markAsRead()\">Mark as Read</ion-button>\n    <ion-button size=\"small\" (click)=\"archieve()\" color=\"secondary\">Archieve</ion-button>\n    <ion-button size=\"small\" (click)=\"deleteSelected()\" color=\"danger\">Delete</ion-button>\n    <ion-button (click)=\"getSelection = false\" color=\"dark\" fill=\"clear\">\n      <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: contain !important;\n  background-color: var(--ion-color-light-shade);\n  margin-right: 10px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .clear {\n  clear: both;\n}\n:host .content-wrapper {\n  height: 100%;\n}\n:host .content-wrapper .from-me,\n:host .content-wrapper .from-them {\n  position: relative;\n  border-radius: 1em;\n  margin: 10px 0;\n  overflow: hidden;\n}\n:host .content-wrapper .from-me .image,\n:host .content-wrapper .from-them .image {\n  width: 200px;\n  height: 200px;\n}\n:host .content-wrapper .from-me .image-group,\n:host .content-wrapper .from-them .image-group {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: auto;\n  grid-gap: 0.5rem;\n  padding: 10px 10px 5px;\n  border-top-left-radius: 1em;\n}\n:host .content-wrapper .from-me .image-group .image-group-image,\n:host .content-wrapper .from-them .image-group .image-group-image {\n  height: 100px;\n  width: 100px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 1em;\n}\n:host .content-wrapper .from-me .text,\n:host .content-wrapper .from-them .text {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep p,\n:host .content-wrapper .from-them .text ::ng-deep p {\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep a,\n:host .content-wrapper .from-them .text ::ng-deep a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .from-me {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border-top-right-radius: 0px;\n  float: right;\n}\n:host .content-wrapper .from-them {\n  background: var(--ion-color-gradient);\n  border-top-left-radius: 0px;\n  color: var(--ion-color-light);\n  float: left;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2UvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXG1lc3NhZ2VzXFxjb21wb25lbnRzXFxtZXNzYWdlXFxtZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL21lc3NhZ2VzL2NvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FDQUo7QURFRTtFQUNFLFdBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FER0k7O0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER007O0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBUjtBREdNOztFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDQVI7QURFUTs7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUNDVjtBREdNOztFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0FSO0FER1U7O0VBQ0UsU0FBQTtBQ0FaO0FER1U7O0VBQ0UsK0JBQUE7QUNBWjtBRE1JO0VBQ0UsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0pOO0FET0k7RUFDRSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDTE47QURVSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNSTiIsImZpbGUiOiJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC50aXRsZS1pbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgfVxuICAuY2xlYXIge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmZyb20tbWUsXG4gICAgLmZyb20tdGhlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIH1cblxuICAgICAgLmltYWdlLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gICAgICAgIGdyaWQtZ2FwOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcblxuICAgICAgICAuaW1hZ2UtZ3JvdXAtaW1hZ2Uge1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5mcm9tLW1lIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAuZnJvbS10aGVtIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgfVxuXG4gIGlvbi1mb290ZXIge1xuICAgIHRleHRhcmVhIHtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcmVzaXplOiBub25lO1xuICAgICAgbWFyZ2luOiA1cHggMTBweCAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCAudGl0bGUtaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBtYXJnaW46IDEwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLmltYWdlLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC5pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLmltYWdlLWdyb3VwLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC5pbWFnZS1ncm91cCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBncmlkLWdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxZW07XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC5pbWFnZS1ncm91cCAuaW1hZ2UtZ3JvdXAtaW1hZ2UsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLmltYWdlLWdyb3VwIC5pbWFnZS1ncm91cC1pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLnRleHQsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLnRleHQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLnRleHQgOjpuZy1kZWVwIHAsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLnRleHQgOjpuZy1kZWVwIHAge1xuICBtYXJnaW46IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lIC50ZXh0IDo6bmctZGVlcCBhLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIC50ZXh0IDo6bmctZGVlcCBhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZ3JhZGllbnQpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmbG9hdDogbGVmdDtcbn1cbjpob3N0IGlvbi1mb290ZXIgdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.ts":
/*!********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.ts ***!
  \********************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/setting/services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/modals/gallery-picker/gallery-picker.component */ "./src/shared/modals/gallery-picker/gallery-picker.component.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/message */ "./src/pages/messages/models/message.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");












/**
 * send messages between users. as a user, you can deactivate autoreply in setting page.
 * or remove autoreply method and all calls to it.
 * sending a message updates messages.message property with the latest message.
 * a function in firebase cloud functions checks every message update and sends a push notification to the device
 * check readme for info on cloud functions
 */
let MessageComponent = class MessageComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
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
        this.chatType = _models_message__WEBPACK_IMPORTED_MODULE_10__["CHAT_TYPES"];
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_7__["ImagePreviewComponent"], image);
            modal.present();
        });
    }
    /** auto reply to message */
    autoReply(text, images = null) {
        if (this.settingService.setting.autoReply === true) {
            setTimeout(() => {
                const data = {
                    images,
                    value: text,
                    type: this.chatType.TEXT,
                    sendAt: Date.now(),
                    uid: this.getSender(this.message).uid
                };
                this.loading = true;
                this.messageService
                    .send(Object.assign({}, this.message), data)
                    .then(() => (this.loading = false))
                    .catch((err) => this.failPromise(err));
            }, 6000);
        }
    }
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (imageData.length > 0) {
                const modal = yield this.openModal(src_shared_modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPickerComponent"], imageData, 'custom-modal');
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
MessageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] },
    { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_11__["MessagesService"] },
    { type: src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "callNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputButton', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "fileInputButton", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/pages/messages/components/message/message.component.html"),
        styles: [__webpack_require__(/*! ./message.component.scss */ "./src/pages/messages/components/message/message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"],
        _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_11__["MessagesService"],
        src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
], MessageComponent);



/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .content-scroll {\n  padding: 0 20px;\n}\n:host ion-content .content-wrapper .content-scroll .messages {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 20px 0;\n}\n:host ion-content .content-wrapper .content-scroll .messages .image {\n  height: 60px;\n  width: 60px;\n  border-radius: 3px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail {\n  margin-left: 15px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .name {\n  font-weight: 500;\n  font-size: 16px;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .msg {\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n  white-space: nowrap;\n  width: 150px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll .messages .date {\n  width: 63px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  overflow: hidden;\n  white-space: nowrap;\n}\n:host ion-content .content-wrapper .content-scroll .messages .action {\n  margin-right: 15px;\n}\n:host ion-footer .buttons {\n  margin: 5px 0 5px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-footer .buttons ion-button {\n  width: 100%;\n}\n:host ion-footer .buttons ion-button.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2VzL0M6XFxVc2Vyc1xcZGQ0MjRcXGRlc2t0b3BcXERldmVsb3BcXGV6eWFwcHNfdWstY29tcGxldGUtZmlyZS1zdGFydGVyLWM2MjhkM2ZjMWZkZS9zcmNcXHBhZ2VzXFxtZXNzYWdlc1xcY29tcG9uZW50c1xcbWVzc2FnZXNcXG1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL21lc3NhZ2VzL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR007RUFDRSxlQUFBO0FDRlI7QURJUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0FDRlY7QURJVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQ0ZaO0FES1U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0haO0FES1k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNIZDtBRE1ZO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0pkO0FEUVU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05aO0FEUVU7RUFDRSxrQkFBQTtBQ05aO0FEYUk7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNYTjtBRFlNO0VBQ0UsV0FBQTtBQ1ZSO0FEV1E7RUFDRSxZQUFBO0FDVFYiLCJmaWxlIjoic3JjL3BhZ2VzL21lc3NhZ2VzL2NvbXBvbmVudHMvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAuY29udGVudC13cmFwcGVyIHtcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcblxuICAgICAgICAubWVzc2FnZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcblxuICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXRhaWwge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1zZyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiA2M3B4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFjdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIC5idXR0b25zIHtcbiAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDE1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwgLm1lc3NhZ2VzIC5pbWFnZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRldGFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwgLm1lc3NhZ2VzIC5kZXRhaWwgLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRldGFpbCAubXNnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRhdGUge1xuICB3aWR0aDogNjNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmFjdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbjpob3N0IGlvbi1mb290ZXIgLmJ1dHRvbnMge1xuICBtYXJnaW46IDVweCAwIDVweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWZvb3RlciAuYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tZm9vdGVyIC5idXR0b25zIGlvbi1idXR0b24ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.component */ "./src/pages/messages/components/message/message.component.ts");








/**
 * view users messages, manage messages.
 */
let MessagesComponent = class MessagesComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, authService, messageService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
        this.allMessages = [];
        this.messages = [];
        this.getSelection = false;
        this.openSearch = false;
        this.view$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const queryObservable = this.view$.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((view) => this.messageService.getMessages(this.currentUser.uid, view)));
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], message);
            modal.present();
        });
    }
    /** action sheet with options for a single chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    options(chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
MessagesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/pages/messages/components/messages/messages.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]])
], MessagesComponent);



/***/ }),

/***/ "./src/pages/messages/messages.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/messages/messages.module.ts ***!
  \***********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/message.component */ "./src/pages/messages/components/message/message.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/pages/messages/components/messages/messages.component.ts");







let MessagesModule = class MessagesModule {
};
MessagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
        entryComponents: [_components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                },
                {
                    path: ':id',
                    component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                }
            ])
        ]
    })
], MessagesModule);



/***/ }),

/***/ "./src/pages/messages/models/message.ts":
/*!**********************************************!*\
  !*** ./src/pages/messages/models/message.ts ***!
  \**********************************************/
/*! exports provided: CHAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_TYPES", function() { return CHAT_TYPES; });
var CHAT_TYPES;
(function (CHAT_TYPES) {
    CHAT_TYPES[CHAT_TYPES["TEXT"] = 0] = "TEXT";
    CHAT_TYPES[CHAT_TYPES["AUDIO"] = 1] = "AUDIO";
    CHAT_TYPES[CHAT_TYPES["IMAGE"] = 2] = "IMAGE";
    CHAT_TYPES[CHAT_TYPES["IMAGE_GROUP"] = 3] = "IMAGE_GROUP";
})(CHAT_TYPES || (CHAT_TYPES = {}));


/***/ }),

/***/ "./src/pages/messages/services/messages/messages.service.ts":
/*!******************************************************************!*\
  !*** ./src/pages/messages/services/messages/messages.service.ts ***!
  \******************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
let MessagesService = class MessagesService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    getMessages(uid, archieved = false) {
        return this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((data) => {
            const reads$ = [];
            if (data.length > 0) {
                data.forEach((msg) => {
                    reads$.push(this.getMessage(msg.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }));
    }
    /** get message and their participants information */
    getMessage(id) {
        let data;
        const reads$ = [];
        return this.firestoreService.doc$(`messages/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((msg) => {
            data = msg;
            msg.participantsId.forEach((i) => {
                reads$.push(this.firestoreService.doc$(`users/${i}`));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((joins) => {
            return Object.assign({}, data, { participants: joins });
        }));
    }
    /** update message */
    updateMessage(message) {
        return this.firestoreService.update(`messages/${message.id}`, message);
    }
    /** delete message */
    deleteMessage(message) {
        return this.firestoreService.delete(`messages/${message.id}`);
    }
    /** delete collection of messages */
    deleteAllMessages(batch) {
        return this.firestoreService.deleteCollection(`messages`, batch);
    }
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    startChat(user) {
        this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', user.uid))
            .subscribe((data) => {
            const message = data[0];
            if (!message) {
                this.createMessage(user);
            }
            else {
                this.goto(`${this.routes.messages}/${message.id}`);
            }
        });
    }
    /** delete a message in chat */
    deleteChat(message, data) {
        return this.firestoreService.update(`messages/${message.id}`, {
            messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(data)
        });
    }
    /** send a message */
    send(message, data) {
        delete message.participants;
        return this.firestoreService.update(`messages/${message.id}`, Object.assign({}, message, { messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data) }));
    }
    /** create a message with participants and default messages property to empty array */
    createMessage(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.add('messages', {
                participantsId: [user.uid, uid],
                messages: [],
                isArchieved: false
            });
        });
    }
};
MessagesService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
], MessagesService);



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es2015.js.map