(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/welcome/components/welcome/welcome.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/welcome/components/welcome/welcome.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\n  <div class=\"content-wrapper\">\n    <!-- start language selection-->\n    <div class=\"language\" *ngIf=\"language\">\n      <ion-icon name=\"globe\"></ion-icon>\n      <span class=\"pl5\">{{ 'welcome-component.change-language' | translate }}</span>\n      <div class=\"flag-icon\" (click)=\"openLanguage()\">\n        <div class=\"flag-img\" [image-loader]=\"language.icon\"></div>\n        {{ language.text | translate }}\n      </div>\n    </div>\n    <!-- end language selection -->\n\n    <!-- start slides -->\n    <div class=\"slides-content\">\n      <ion-slides (ionSlideDidChange)=\"slideChanged()\">\n        <ion-slide *ngFor=\"let item of slides\">\n          <div class=\"slide-wrapper\">\n            <div class=\"image\" [image-loader]=\"item.image\"></div>\n            <div class=\"detail\">\n              <div class=\"title\">{{ item.title | translate }}</div>\n              <div class=\"paragraph\">{{ item.paragraph | translate }}</div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- end slides -->\n\n    <!-- start navigation -->\n    <div class=\"navigation\">\n      <ion-button shape=\"round\" color=\"primary\" (click)=\"goto(routes.auth)\">\n        {{ 'welcome-component.get-started' | translate }}</ion-button\n      >\n      <div class=\"swiper-bullets\">\n        <span\n          class=\"bullet\"\n          *ngFor=\"let item of slides; let i = index\"\n          [ngClass]=\"{ active: i === currentIndex }\"\n        ></span>\n      </div>\n    </div>\n    <!-- end navigation -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  padding: 0 10px;\n}\n:host ion-content .content-wrapper .slides-content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .slides-content ion-slides {\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 95%;\n  border-radius: 12px;\n  border: 1px solid var(--ion-color-light-shade);\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image {\n  height: 300px;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(var(--ion-color-light-rgb), 0)), color-stop(55%, rgba(var(--ion-color-light-rgb), 0.7)), color-stop(65%, var(--ion-color-light)));\n  background-image: linear-gradient(to bottom, rgba(var(--ion-color-light-rgb), 0) 0, rgba(var(--ion-color-light-rgb), 0.7) 55%, var(--ion-color-light) 65%);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail {\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 0 20px;\n  text-align: left;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .title {\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .paragraph {\n  font-size: 15px;\n  padding: 10px 0;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .language {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  padding-top: 10px;\n  margin: 10px;\n}\n:host ion-content .content-wrapper .language .flag-icon {\n  color: var(--ion-color-primary);\n  padding-left: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .language .flag-icon .flag-img {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .navigation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets {\n  margin: 30px 0;\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span {\n  margin: 0 6px;\n  width: 7px;\n  height: 7px;\n  border-radius: 100%;\n  background: var(--ion-color-medium);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span.active {\n  background: var(--ion-color-primary);\n  width: 14px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xcd2VsY29tZVxcY29tcG9uZW50c1xcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RSO0FER1E7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFEQUFBO0VBQ0EsZ0JBQUE7QUNEVjtBREdVO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0RaO0FERVk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNBZDtBREVjO0VBQ0UsYUFBQTtBQ0FoQjtBREVnQjtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzTkFBQTtFQUFBLDBKQUFBO0FDQWxCO0FEU2M7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1BoQjtBRFNnQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUGxCO0FEVWdCO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ1JsQjtBRGdCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDZFI7QURlUTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDYlY7QURjVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNaWjtBRGlCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZlI7QURpQlE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDZlY7QURpQlU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ2ZaO0FEaUJZO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNmZCIsImZpbGUiOiJzcmMvcGFnZXMvd2VsY29tZS9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgIC5zbGlkZXMtY29udGVudCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC5zbGlkZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAgICAgICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSAwLFxuICAgICAgICAgICAgICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjcpIDU1JSxcbiAgICAgICAgICAgICAgICAgICAgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA2NSVcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sYW5ndWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAuZmxhZy1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgLmZsYWctaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5zd2lwZXItYnVsbGV0cyB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcblxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTUlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuaW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLXdyYXBwZXIgLmltYWdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSAwLCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjcpIDU1JSwgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA2NSUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLXdyYXBwZXIgLmRldGFpbCB7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuZGV0YWlsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZS13cmFwcGVyIC5kZXRhaWwgLnBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5sYW5ndWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubGFuZ3VhZ2UgLmZsYWctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmxhbmd1YWdlIC5mbGFnLWljb24gLmZsYWctaW1nIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubmF2aWdhdGlvbiAuc3dpcGVyLWJ1bGxldHMge1xuICBtYXJnaW46IDMwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24gLnN3aXBlci1idWxsZXRzIHNwYW4ge1xuICBtYXJnaW46IDAgNnB4O1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24gLnN3aXBlci1idWxsZXRzIHNwYW4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB3aWR0aDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/welcome/welcome.service */ "./src/pages/welcome/services/welcome/welcome.service.ts");







/**
 * welcome screen with walkthrough on using the app and access to auth module
 */
var WelcomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeComponent, _super);
    function WelcomeComponent(injector, storage, appService, welcomeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.storage = storage;
        _this.appService = appService;
        _this.welcomeService = welcomeService;
        /** stores slides array from service */
        _this.slides = [];
        /** save active index of slides */
        _this.currentIndex = 0;
        /** stores language data */
        _this.language = null;
        return _this;
    }
    /** get slides and languages data from services
     * set selected language from device local storage or default to gb
     */
    WelcomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lang;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.slides = this.welcomeService.slides;
                        this.languages = this.welcomeService.languages;
                        return [4 /*yield*/, this.storage.get('language')];
                    case 1:
                        lang = _a.sent();
                        if (lang) {
                            this.language = this.languages.find(function (item) { return item.code === lang; });
                        }
                        else {
                            this.language = this.languages[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** on slide changes, update currentIndex property, this will update our custom navigation bullets */
    WelcomeComponent.prototype.slideChanged = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.currentIndex = index;
        });
    };
    /** open an action sheet with language options */
    WelcomeComponent.prototype.openLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('welcome-component.select-lang'),
                            buttons: [
                                {
                                    text: this.translate.instant('welcome-component.english'),
                                    handler: function () {
                                        _this.changeLanguage('gb');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.spanish'),
                                    handler: function () {
                                        _this.changeLanguage('es');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.french'),
                                    handler: function () {
                                        _this.changeLanguage('fr');
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
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
    /**
     * change language based on actionsheet selection
     */
    WelcomeComponent.prototype.changeLanguage = function (lang) {
        this.appService.langConfig(lang);
        this.language = this.languages.find(function (data) { return data.code === lang; });
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WelcomeComponent.prototype, "slider", void 0);
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/pages/welcome/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/pages/welcome/components/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/services/welcome/welcome.service.ts":
/*!***************************************************************!*\
  !*** ./src/pages/welcome/services/welcome/welcome.service.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeService", function() { return WelcomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



/**
 * set data for languages and slides in welcome component
 */
var WelcomeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeService, _super);
    function WelcomeService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        /** set app language options this property is used by component to set language dropdown */
        _this._languages = [
            {
                icon: 'assets/images/flags/gb.svg',
                text: _this.translate.instant('welcome-component.english'),
                code: 'gb'
            },
            {
                icon: 'assets/images/flags/es.svg',
                text: _this.translate.instant('welcome-component.spanish'),
                code: 'es'
            },
            {
                icon: 'assets/images/flags/fr.svg',
                text: _this.translate.instant('welcome-component.french'),
                code: 'fr'
            }
        ];
        /** set welcome slides data */
        _this._slides = [
            {
                image: '../assets/images/logo.png',
                title: 'welcome-component.slide-1-title',
                paragraph: 'welcome-component.slide-1-paragraph'
            },
            {
                image: '../assets/images/welcome/profile.jpg',
                title: 'welcome-component.slide-2-title',
                paragraph: 'welcome-component.slide-2-paragraph'
            },
            {
                image: '../assets/images/welcome/feed.jpeg',
                title: 'welcome-component.slide-3-title',
                paragraph: 'welcome-component.slide-3-paragraph'
            },
            {
                image: '../assets/images/welcome/friends.jpg',
                title: 'welcome-component.slide-4-title',
                paragraph: 'welcome-component.slide-4-paragraph'
            },
            {
                image: '../assets/images/welcome/chat.jpg',
                title: 'welcome-component.slide-5-title',
                paragraph: 'welcome-component.slide-5-paragraph'
            }
        ];
        return _this;
    }
    Object.defineProperty(WelcomeService.prototype, "languages", {
        /** public getter to make language property accessible */
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WelcomeService.prototype, "slides", {
        /** public getter to make slides property accessible */
        get: function () {
            return this._slides;
        },
        enumerable: true,
        configurable: true
    });
    WelcomeService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    WelcomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WelcomeService);
    return WelcomeService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/welcome.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/welcome/welcome.module.ts ***!
  \*********************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/pages/welcome/components/welcome/welcome.component.ts");






var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                    },
                ]),
            ],
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map