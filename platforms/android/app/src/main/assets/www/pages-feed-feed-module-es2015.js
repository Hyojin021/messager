(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-add/feed-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-add/feed-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"content-wrapper\" *ngIf=\"currentUser && feed\">\n    <div class=\"author\">\n      <div class=\"image\" [image-loader]=\"currentUser.photoURL\"></div>\n      <div class=\"details\">\n        <div class=\"name\">{{ currentUser.displayName }}</div>\n        <div class=\"publish-date\">{{ currentUser.email }}</div>\n      </div>\n      <div class=\"option\">\n        <ion-button fill=\"clear\" color=\"medium\" size=\"small\" (click)=\"closeModal()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"wrapper\">\n      <div class=\"input-wrapper light fill\" *ngIf=\"more\">\n        <textarea\n          placeholder=\"{{ 'feed-add-component.title-label' | translate }}\"\n          autosize\n          maxRows=\"3\"\n          name=\"title\"\n          #title=\"ngModel\"\n          [(ngModel)]=\"feed.title\"\n        ></textarea>\n      </div>\n\n      <div class=\"input-wrapper light fill\" *ngIf=\"more\">\n        <textarea\n          placeholder=\"{{ 'feed-add-component.subtitle-label' | translate }}\"\n          autosize\n          maxRows=\"3\"\n          name=\"subtitle\"\n          #subtitle=\"ngModel\"\n          [(ngModel)]=\"feed.subtitle\"\n        ></textarea>\n      </div>\n\n      <div class=\"input-wrapper light fill\">\n        <div class=\"row\">\n          <div class=\"prefix\"><span class=\"lnr lnr-bubble\"></span></div>\n          <textarea\n            placeholder=\"{{ 'feed-add-component.content-label' | translate }}\"\n            autosize\n            maxRows=\"3\"\n            name=\"content\"\n            #content=\"ngModel\"\n            [(ngModel)]=\"feed.content\"\n          ></textarea>\n        </div>\n      </div>\n\n      <!-- image section -->\n      <div class=\"image-content\" *ngIf=\"images.length > 1\">\n        <div class=\"images\">\n          <div\n            class=\"image-item\"\n            *ngFor=\"let item of images; let i = index\"\n            [image-loader]=\"item\"\n            (click)=\"doMoreOnImage(item, i)\"\n          ></div>\n        </div>\n      </div>\n\n      <!-- action section -->\n      <div class=\"actions mt10\">\n        <div class=\"start\">\n          <ion-button fill=\"clear\" *ngFor=\"let item of feedOptions\" (click)=\"item.click()\">\n            <ion-icon src=\"assets/icons/{{ item.icon }}.svg\"></ion-icon>\n          </ion-button>\n        </div>\n        <div class=\"end\">\n          <ion-button size=\"small\" shape=\"round\" (click)=\"save()\">\n            {{ 'feed-add-component.post-button' | translate }}\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<app-spinner *ngIf=\"loading\"></app-spinner>\n\n<!-- required for browser file upload -->\n<input hidden #fileInputButton type=\"file\" (change)=\"detectFiles($event)\" multiple />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-comment/feed-comment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-comment/feed-comment.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-buttons>\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'feed-comment-component.title' | translate }}\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\">\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\n\n    <div class=\"wrapper\">\n      <div class=\"content-scroll\" #content>\n        <ng-container *ngIf=\"comments.length > 0\">\n          <div class=\"comment\" *ngFor=\"let item of comments\">\n            <div class=\"image\" [image-loader]=\"item?.user?.photoURL\"></div>\n            <div class=\"detail\">\n              <div class=\"user\">\n                <div class=\"name\">{{ item?.user?.displayName }}</div>\n                <div class=\"date\">{{ item.updatedAt?.toDate() | amTimeAgo }}</div>\n              </div>\n              <div class=\"message\">{{ item.text || 'feed-comment-component.no-comment' | translate }}</div>\n            </div>\n            <div class=\"options\" *ngIf=\"item?.user?.uid === user.uid\">\n              <ion-icon color=\"medium\" name=\"more\" (click)=\"openOptions(item)\"></ion-icon>\n            </div>\n          </div>\n        </ng-container>\n\n        <app-no-data *ngIf=\"comments.length === 0\"></app-no-data>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class=\"custom-form\">\n    <textarea\n      elastic-textarea=\"50\"\n      name=\"message\"\n      placeholder=\"{{ 'feed-comment-component.placeholder' | translate }}\"\n      [(ngModel)]=\"commentMsg\"\n    ></textarea>\n\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"save(commentMsg)\">\n        <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-detail/feed-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-detail/feed-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"content-wrapper\" *ngIf=\"feed && user\">\n    <div class=\"wrapper no-padding\">\n      <!-- image -->\n      <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length === 0\">\n        <div class=\"menu-toolbar\">\n          <ion-icon name=\"close\" color=\"light\" (click)=\"closeModal()\"></ion-icon>\n        </div>\n        <div class=\"image-nav-wrapper\">\n          <div class=\"center\">\n            <img src=\"assets/images/other/no-data.png\" alt=\"empty\" width=\"200px\" />\n            <p>{{ 'feed-component.no-post-image' | translate }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length > 0\" [image-loader]=\"feed.images[currentIndex]\">\n        <div class=\"menu-toolbar\">\n          <ion-icon name=\"close\" color=\"light\" (click)=\"closeModal()\"></ion-icon>\n        </div>\n        <div class=\"image-nav-wrapper\">\n          <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\n            <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n          </div>\n          <div class=\"center\"></div>\n          <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\n            <ion-icon mode=\"ios\" name=\"arrow-forward\" (click)=\"forward()\"></ion-icon>\n          </div>\n        </div>\n      </div>\n\n      <!-- content -->\n      <div class=\"content\">\n        <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\n        <div class=\"subtitle\">{{ feed.subtitle || 'feed-component.no-post-subtitle' | translate }}</div>\n\n        <div class=\"author\">\n          <div class=\"image\" [image-loader]=\"feed.user.photoURL\"></div>\n          <div class=\"details\">\n            <div class=\"name\">{{ feed.user.displayName }}</div>\n            <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\n          </div>\n        </div>\n\n        <div class=\"paragraph\">{{ feed.content || 'feed-component.no-post-image' | translate }}</div>\n      </div>\n\n      <!-- actions -->\n      <div class=\"actions\">\n        <div class=\"start\">\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"like()\">\n            <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\"> </ion-icon>\n            <small>{{ feed.likes.length > 0 ? feed.likes.length : '' }}</small>\n          </ion-button>\n\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"comment(feed)\">\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <small>{{ feed.comments.length ? feed.comments.length : '' }}</small>\n          </ion-button>\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"share(feed)\">\n            <ion-icon name=\"share-alt\"></ion-icon>\n            <small>{{ 'feed-component.share-button' | translate }}</small>\n          </ion-button>\n        </div>\n        <div class=\"end\" *ngIf=\"feed.uid === user.uid\">\n          <ion-button color=\"secondary\" fill=\"clear\" (click)=\"edit(feed)\">\n            <ion-icon name=\"create\"></ion-icon>\n            <small>{{ 'feed-component.edit-button' | translate }}</small>\n          </ion-button>\n\n          <ion-button color=\"danger\" fill=\"clear\" (click)=\"delete(feed)\">\n            <ion-icon name=\"trash\"></ion-icon>\n          </ion-button>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed/feed.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed/feed.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        {{ 'feed-component.title' | translate }}\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"addPost()\">\n          <ion-icon mode=\"md\" name=\"add\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <app-tab-menu [tabs]=\"views\" (event)=\"view = $event\"></app-tab-menu>\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\n\n    <div class=\"wrapper\">\n      <div class=\"content-scroll\" #content>\n        <ng-container [ngSwitch]=\"view\">\n          <ng-container *ngSwitchCase=\"1\">\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"2\">\n            <feed-timeline *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-timeline>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"3\">\n            <feed-showcase *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-showcase>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"4\">\n            <feed-modern *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-modern>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\n          </ng-container>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/minimal/minimal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/minimal/minimal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\n  <!-- author section -->\n  <div class=\"author\">\n    <div class=\"image\" [image-loader]=\"feed.user?.photoURL\" (click)=\"clicked('profile')\"></div>\n    <div class=\"details\">\n      <div class=\"name\">{{ feed.user?.displayName }}</div>\n      <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\n    </div>\n    <div class=\"option\" *ngIf=\"feed.user?.uid === me.uid\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <!-- image section -->\n  <div class=\"image-content\" (click)=\"clicked('detail')\">\n    <div class=\"image-item\" [image-loader]=\"item\" *ngFor=\"let item of feed.images | slice: 0:4\"></div>\n  </div>\n\n  <div class=\"content\" (click)=\"clicked('detail')\">\n    <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\n    <div class=\"subtitle\">{{ (feed.content | slice: 0:70) || ('feed-component.no-post-content' | translate) }}</div>\n  </div>\n\n  <div class=\"actions mt10\">\n    <div class=\"start\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'primary'\">\n        </ion-icon>\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n    </div>\n    <div class=\"end\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n        <small>{{ 'feed-component.share-button' | translate }}</small>\n      </ion-button>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/modern/modern.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/modern/modern.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\n  <div class=\"start\">\n    <div class=\"title\" (click)=\"clicked('detail')\">\n      {{ feed.title | slice: 0:50 || 'feed-component.no-post-title' | translate }}\n    </div>\n    <div class=\"content\" (click)=\"clicked('detail')\">\n      {{ feed.content | slice: 0:150 || 'feed-component.no-post-content' | translate }}\n    </div>\n\n    <div class=\"author\" (click)=\"clicked('profile')\">\n      <div class=\"name\">{{ feed.user.displayName }}</div>\n      <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\n    </div>\n\n    <div class=\"actions\">\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\">\n        </ion-icon>\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n        <small>{{ 'feed-component.share-button' | translate }}</small>\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"end\">\n    <div class=\"image\" [image-loader]=\"feed.images[currentIndex]\">\n      <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\n        <ion-icon mode=\"ios\" name=\"arrow-up\" (click)=\"back()\"></ion-icon>\n      </div>\n      <div class=\"center\" (click)=\"clicked('detail')\"></div>\n      <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\n        <ion-icon mode=\"ios\" name=\"arrow-down\" (click)=\"forward()\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/showcase/showcase.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/showcase/showcase.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\n  <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length > 0\" [image-loader]=\"feed.images[currentIndex]\">\n    <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\n      <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\n    </div>\n    <div class=\"center\" (click)=\"clicked('detail')\"></div>\n    <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\n      <ion-icon mode=\"ios\" name=\"arrow-forward\" (click)=\"forward()\"></ion-icon>\n    </div>\n  </div>\n\n  <div class=\"content\">\n    <div class=\"content-header\">\n      <div class=\"feed-info\">\n        <div class=\"subtitle\">{{ (feed.content | slice: 0:60) || ('feed-component.no-post-content' | translate) }}</div>\n      </div>\n      <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\n          <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"author\">\n      <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\n      <div class=\"details\">\n        <div class=\"name\">{{ feed.user.displayName }}</div>\n        <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\n      </div>\n    </div>\n\n    <div class=\"actions\">\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\">\n        </ion-icon>\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n        <small>{{ 'feed-component.share-button' | translate }}</small>\n      </ion-button>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/timeline/timeline.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/timeline/timeline.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\n  <!-- author section -->\n  <div class=\"author\">\n    <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\n    <div class=\"details\">\n      <div class=\"name\">{{ feed.user.displayName }}</div>\n      <div class=\"publish-date\">{{ feed?.updatedAt?.toDate() | amTimeAgo }}</div>\n    </div>\n    <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\n        <ion-icon name=\"more\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n\n  <!-- content section -->\n  <div class=\"content\">\n    <div class=\"actions mt10\">\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'primary'\">\n        </ion-icon>\n        <small>{{ feed.likes.length > 0 ? feed.likes.length : '' }}</small>\n      </ion-button>\n\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\n        <ion-icon name=\"chatboxes\"></ion-icon>\n        <small>{{ feed.comments.length ? feed.comments.length : '' }}</small>\n      </ion-button>\n\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\n        <ion-icon name=\"share-alt\"></ion-icon>\n      </ion-button>\n    </div>\n\n    <div class=\"info-content\" (click)=\"clicked('detail')\">\n      <div *ngIf=\"feed.images && feed.images > 0\" class=\"image-content\" (click)=\"clicked('detail')\">\n        <div class=\"image-item\" [image-loader]=\"feed.images[0]\"></div>\n      </div>\n      <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\n      <div class=\"subtitle\">{{ (feed.content | slice: 0:70) || ('feed-component.no-post-content' | translate) }}</div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/pages/feed/components/feed-add/feed-add.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/feed/components/feed-add/feed-add.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 95%;\n  height: auto;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n}\n:host ion-content .content-wrapper .wrapper {\n  padding: 0 20px 15px;\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .author .details .publish-date {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .input-wrapper {\n  border-bottom: 0.5px solid var(--ion-color-light-shade);\n}\n:host .input-wrapper .row {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n:host .input-wrapper .row .prefix {\n  color: var(--ion-color-medium);\n  width: unset;\n  margin-top: 3px;\n}\n:host .input-wrapper:last-of-type {\n  border: 0 !important;\n}\n:host .input-wrapper textarea {\n  width: 100%;\n  resize: none;\n  outline: none;\n  border: none;\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  height: 80px;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin: 10px 0;\n}\n:host .image-content .images {\n  display: -webkit-box;\n  display: flex;\n}\n:host .image-content .images .image-item {\n  width: 75px;\n  height: 99%;\n  margin: 1px;\n  height: 75px;\n  margin: 1px 2px;\n  border-radius: 6px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .image-content .images .delete-btn {\n  width: 75px;\n  height: 99%;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: -15px;\n}\n:host .actions .start button {\n  background: transparent;\n  outline: none;\n  padding: 10px 0;\n  margin: 0 10px;\n}\n:host .actions .start button .lnr {\n  font-size: 18px;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1hZGQvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXGZlZWRcXGNvbXBvbmVudHNcXGZlZWQtYWRkXFxmZWVkLWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1hZGQvZmVlZC1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0FDQU47QURFTTtFQUNFLG9CQUFBO0FDQVI7QURLRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDSk47QURNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSlI7QURPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDTFI7QURVRTtFQUNFLHVEQUFBO0FDUko7QURVSTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNSTjtBRFVNO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEWUk7RUFDRSxvQkFBQTtBQ1ZOO0FEYUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDWE47QURlRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNiSjtBRGNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDWk47QURjTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQ1pSO0FEY007RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ1pSO0FEaUJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2ZKO0FEaUJJO0VBQ0UsaUJBQUE7QUNmTjtBRGtCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDaEJOO0FEa0JNO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNoQlI7QURrQlE7RUFDRSxlQUFBO0FDaEJWO0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDbkJOIiwiZmlsZSI6InNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1hZGQvZmVlZC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICB3aWR0aDogOTUlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luOiAyMCUgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAuaW1hZ2Uge1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnB1Ymxpc2gtZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbnB1dC13cmFwcGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgLnJvdyB7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLnByZWZpeCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgdGV4dGFyZWEge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICAuaW1hZ2VzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5pbWFnZS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIGhlaWdodDogOTklO1xuICAgICAgICBtYXJnaW46IDFweDtcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xuICAgICAgICBtYXJnaW46IDFweCAycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIH1cbiAgICAgIC5kZWxldGUtYnRuIHtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgICAgIGhlaWdodDogOTklO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBzbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG5cbiAgICAuc3RhcnQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICAgIC5sbnIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMjAlIGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgcGFkZGluZzogMCAyMHB4IDE1cHg7XG59XG46aG9zdCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbn1cbjpob3N0IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMgLm5hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIC5wdWJsaXNoLWRhdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyIC5yb3cge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyIC5yb3cgLnByZWZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgd2lkdGg6IHVuc2V0O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlcjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweCAwO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2VzIC5pbWFnZS1pdGVtIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogOTklO1xuICBtYXJnaW46IDFweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBtYXJnaW46IDFweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZXMgLmRlbGV0ZS1idG4ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA5OSU7XG59XG46aG9zdCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuYWN0aW9ucyBzbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuOmhvc3QgLmFjdGlvbnMgLnN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuOmhvc3QgLmFjdGlvbnMgLnN0YXJ0IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuOmhvc3QgLmFjdGlvbnMgLnN0YXJ0IGJ1dHRvbiAubG5yIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuOmhvc3QgLmFjdGlvbnMgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed-add/feed-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/feed/components/feed-add/feed-add.component.ts ***!
  \******************************************************************/
/*! exports provided: FeedAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedAddComponent", function() { return FeedAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");










/**
 * allows the user to edit or add new post, browse, select and store images to firebase storage
 */
let FeedAddComponent = class FeedAddComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, authService, commonService, feedService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.commonService = commonService;
        this.feedService = feedService;
        this.firestoreService = firestoreService;
        this.images = [];
        this.tempImages = [];
        this.feedOptions = [
            {
                icon: 'camera',
                click: () => {
                    this.openImageOptions();
                }
            },
            {
                icon: 'check-square',
                click: () => {
                    this.more = !this.more;
                }
            }
        ];
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user, get id from navParam, if id present get data for feed, if no id set default data */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const id = this.navParams.get('data');
            if (!id) {
                this.feed = {
                    id: this.firestoreService.createId(),
                    content: '',
                    images: [],
                    subtitle: '',
                    title: '',
                    uid: this.currentUser.uid
                };
            }
            else {
                this.subscriptions.push(this.feedService.getPost(id, this.currentUser.uid).subscribe((feed) => {
                    this.feed = feed;
                    this.images = this.feed.images;
                }));
            }
        });
    }
    /** open options for image upload */
    openImageOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-add-component.image-option-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-add-component.image-option-library'),
                        handler: () => {
                            this.getPictures(0, true);
                        }
                    },
                    {
                        text: this.translate.instant('feed-add-component.image-option-camera'),
                        handler: () => {
                            this.getPictures(1);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** open options on image selection, present actionsheet to delete or open image */
    doMoreOnImage(image, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.open-label'),
                        handler: () => {
                            this.openImage(image);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.removeImage(index);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** used for browser image uploads, hooked up to input file type on change event */
    detectFiles(event) {
        this.commonService.getImagesFromFiles(event).then((images) => {
            this.checkAndSaveImages(images);
        });
    }
    /** remove uploaded images */
    removeImage(index) {
        this.firestoreService.deleteUpload(this.images[index]);
        this.images.splice(index, 1);
    }
    /** preview image in modal */
    openImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"], image, 'custom-modal');
            modal.present();
        });
    }
    /** save feed and feed images */
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            if (!this.feed.images || (!this.feed.images && !Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(this.feed.images))) {
                this.feed.images = [];
            }
            this.uploadImage(this.tempImages).then((images) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.feed.images = this.feed.images.concat(images);
                yield this.feedService.upsertPost(this.feed).then((_data) => {
                    this.loading = false;
                    this.closeModal();
                }, (error) => this.toast(error));
            }));
        });
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
                yield this.checkAndSaveImages(imageData);
            }
            else {
                // if on device use browser file upload
                this.fileInputButton.nativeElement.click();
            }
        });
    }
    /** remove images from input file for browser only
     * store images or send a toast id no image found
     */
    checkAndSaveImages(imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = false;
            this.fileInputButton.nativeElement.value = null;
            if (imageData.length > 0) {
                this.tempImages = imageData;
                this.images = this.images.concat(this.tempImages);
            }
            else {
                this.toast(this.translate.instant('message.component.no-images-selected'));
            }
        });
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    uploadImage(imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.images = imageData;
            const read$ = [];
            this.images.forEach((i) => {
                read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, `feed-images-${this.feed.id}`));
            });
            try {
                const res = yield Promise.all(read$);
                this.loading = false;
                return res;
            }
            catch (err) {
                return this.failPromise(err);
            }
        });
    }
};
FeedAddComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputButton', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FeedAddComponent.prototype, "fileInputButton", void 0);
FeedAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-add',
        template: __webpack_require__(/*! raw-loader!./feed-add.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-add/feed-add.component.html"),
        styles: [__webpack_require__(/*! ./feed-add.component.scss */ "./src/pages/feed/components/feed-add/feed-add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
], FeedAddComponent);



/***/ }),

/***/ "./src/pages/feed/components/feed-comment/feed-comment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/feed/components/feed-comment/feed-comment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host ion-content .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 100px) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 15px;\n  margin: 10px 15px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .image {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 0 15px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .name {\n  font-size: 14px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .date {\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .message {\n  font-size: 14px;\n  margin: 4px 0;\n  color: var(--ion-color-medium-shade);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1jb21tZW50L0M6XFxVc2Vyc1xcZGQ0MjRcXGRlc2t0b3BcXERldmVsb3BcXGV6eWFwcHNfdWstY29tcGxldGUtZmlyZS1zdGFydGVyLWM2MjhkM2ZjMWZkZS9zcmNcXHBhZ2VzXFxmZWVkXFxjb21wb25lbnRzXFxmZWVkLWNvbW1lbnRcXGZlZWQtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1jb21tZW50L2ZlZWQtY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QUNIVjtBREtVO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSFo7QURRTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNOUjtBRFFRO0VBQ0UscUNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDTlY7QURRVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQ05aO0FEUVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTmQ7QURTWTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGVBQUE7QUNQZDtBRFNjO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNQaEI7QURTZ0I7RUFDRSxlQUFBO0FDUGxCO0FEVWdCO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDUmxCO0FEWWM7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FDVmhCO0FEY1k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDWmQ7QURxQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDbkJOIiwiZmlsZSI6InNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1jb21tZW50L2ZlZWQtY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaW9uLWNvbnRlbnQge1xuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgLmhlYWRlciB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAuY29tbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcblxuICAgICAgICAgICAgICAudXNlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3B0aW9ucyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWZvb3RlciB7XG4gICAgdGV4dGFyZWEge1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICByZXNpemU6IG5vbmU7XG4gICAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmhlYWRlciAudGl0bGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmNvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5jb21tZW50IC5pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmNvbW1lbnQgLmRldGFpbCAudXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5jb21tZW50IC5kZXRhaWwgLnVzZXIgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIC51c2VyIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDRweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tZm9vdGVyIHRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG1hcmdpbjogNXB4IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed-comment/feed-comment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/feed/components/feed-comment/feed-comment.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCommentComponent", function() { return FeedCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");






/**
 * enable user to add comments to a post
 */
let FeedCommentComponent = class FeedCommentComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.feedService = feedService;
        this.comments = [];
        this.openSearch = false;
    }
    /** get current user and post id from navParams and get comments for the post */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const fid = this.navParams.get('data');
            this.loading = true;
            this.subscriptions.push(this.feedService.getComments(fid, this.user.uid).subscribe((comments) => {
                this.loading = false;
                this.comments = comments;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** search comments */
    onSearch(val) {
        this.comments = this.feedService.searchComments(val);
    }
    /** save or edit new or existing comment */
    save(text) {
        let comment;
        if (this.editComment) {
            comment = this.editComment;
            comment.text = text;
        }
        else {
            comment = {
                uid: this.user.uid,
                fid: this.navParams.get('data'),
                text
            };
        }
        this.feedService.upsertComment(comment).then(() => {
            comment = null;
            this.commentMsg = null;
            this.editComment = null;
        });
    }
    /** manage comment by opening actionsheet and displaying options edit or delete comment. */
    openOptions(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.editComment = comment;
                            this.commentMsg = comment.text;
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.feedService.deleteComment(comment);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
FeedCommentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }
];
FeedCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-comment',
        template: __webpack_require__(/*! raw-loader!./feed-comment.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-comment/feed-comment.component.html"),
        styles: [__webpack_require__(/*! ./feed-comment.component.scss */ "./src/pages/feed/components/feed-comment/feed-comment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]])
], FeedCommentComponent);



/***/ }),

/***/ "./src/pages/feed/components/feed-detail/feed-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/feed/components/feed-detail/feed-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .wrapper {\n  height: calc(100% - 70px);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 340px;\n  width: 100%;\n  position: relative;\n  background-color: var(--ion-color-light);\n}\n:host .image-content:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(var(--ion-color-dark-rgb), 0.8)), color-stop(20%, rgba(var(--ion-color-light-rgb), 0)), color-stop(80%, rgba(var(--ion-color-light-rgb), 0)), to(rgba(var(--ion-color-dark-rgb), 0.8)));\n  background-image: linear-gradient(to right, rgba(var(--ion-color-dark-rgb), 0.8) 0, rgba(var(--ion-color-light-rgb), 0) 20%, rgba(var(--ion-color-light-rgb), 0) 80%, rgba(var(--ion-color-dark-rgb), 0.8) 100%);\n}\n:host .image-content .menu-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 20px 20px 0;\n  z-index: 10;\n}\n:host .image-content .menu-toolbar ion-icon {\n  font-size: 22px;\n}\n:host .image-content .image-nav-wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .image-content .image-nav-wrapper .left,\n:host .image-content .image-nav-wrapper .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 15px;\n  color: var(--ion-color-light);\n}\n:host .image-content .image-nav-wrapper .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .image-content .image-nav-wrapper .right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px 20px 0px;\n  margin-top: -50px;\n  border-radius: 30px;\n  background: var(--ion-color-light);\n  height: calc(100% - 260px);\n  z-index: 10;\n  position: relative;\n  overflow-y: auto;\n}\n:host .content .title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n:host .content .subtitle {\n  padding: 5px 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content .paragraph {\n  padding: 10px 0;\n  font-weight: 400;\n}\n:host .content .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0;\n}\n:host .content .author .image {\n  width: 50px;\n  height: 50px;\n  border-radius: 6px;\n}\n:host .content .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .author .details .name {\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .content .author .details .publish-date {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1kZXRhaWwvQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xccGFnZXNcXGZlZWRcXGNvbXBvbmVudHNcXGZlZWQtZGV0YWlsXFxmZWVkLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1kZXRhaWwvZmVlZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7QUNDSjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FDQUo7QURFSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwwUUFBQTtFQUFBLGdOQUFBO0FDQU47QURTSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNQTjtBRFNNO0VBQ0UsZUFBQTtBQ1BSO0FEV0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDVE47QURXTTs7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDVFI7QURZTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVlI7QURhTTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNYUjtBRGdCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2RKO0FEZ0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNkTjtBRGlCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ2ZOO0FEa0JJO0VBQ0UsZUFBQTtFQUVBLGdCQUFBO0FDakJOO0FEb0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ2xCTjtBRG9CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQk07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDbkJSO0FEcUJRO0VBRUUsZ0JBQUE7RUFDQSwrQkFBQTtBQ3BCVjtBRHVCUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDckJWO0FEMkJFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtEQUFBO0FDekJKO0FEMkJJO0VBQ0UsaUJBQUE7QUN6Qk47QUQ0Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUMxQk47QUQ2Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUMzQk4iLCJmaWxlIjoic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkLWRldGFpbC9mZWVkLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAud3JhcHBlciB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgfVxuXG4gIC5pbWFnZS1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjgpIDAsXG4gICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDIwJSxcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMCkgODAlLFxuICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuOCkgMTAwJVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAubWVudS10b29sYmFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gICAgICB6LWluZGV4OiAxMDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlLW5hdi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5sZWZ0LFxuICAgICAgLnJpZ2h0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAucmlnaHQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMzBweCAyMHB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjBweCk7XG4gICAgei1pbmRleDogMTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG5cbiAgICAucGFyYWdyYXBoIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIC8vIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLmF1dGhvciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAvLyBmb250LXNpemU6IDFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuXG4gICAgLnN0YXJ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5lbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC53cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAzNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC44KSAwLCByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSAyMCUsIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDgwJSwgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjgpIDEwMCUpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLm1lbnUtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICB6LWluZGV4OiAxMDtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5tZW51LXRvb2xiYXIgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtbmF2LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtbmF2LXdyYXBwZXIgLmxlZnQsXG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtbmF2LXdyYXBwZXIgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZS1uYXYtd3JhcHBlciAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtbmF2LXdyYXBwZXIgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjpob3N0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweCAyMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjYwcHgpO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuOmhvc3QgLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuOmhvc3QgLmNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQgLnBhcmFncmFwaCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIC5pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIC5kZXRhaWxzIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmFjdGlvbnMgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed-detail/feed-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/pages/feed/components/feed-detail/feed-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedDetailComponent", function() { return FeedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");









/**
 * view post details
 */
let FeedDetailComponent = class FeedDetailComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, commonService, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.commonService = commonService;
        this.authService = authService;
        this.feedService = feedService;
        this.feed = null;
        this.currentIndex = 0;
    }
    /** get user and get post */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const id = this.navParams.get('data');
            this.subscriptions.push(this.feedService.getPost(id, this.user.uid).subscribe((feed) => (this.feed = feed)));
        });
    }
    /** open action sheet with options to edit, delete, access comments, like or share post */
    openOptions(feed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.edit(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        role: 'destructive',
                        handler: () => {
                            this.delete(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.open-comments'),
                        handler: () => {
                            this.comment(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.like'),
                        handler: () => {
                            this.like();
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.share-button'),
                        handler: () => {
                            this.share(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    /** open edit modal with post id */
    edit(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (post.user.uid === this.user.uid) {
                const modal = yield this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_7__["FeedAddComponent"], post.id, 'custom-modal');
                yield modal.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-edit'));
            }
        });
    }
    /** like feed */
    like() {
        this.feedService.like(this.feed);
    }
    /** open comments */
    comment(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_8__["FeedCommentComponent"], post);
            modal.present();
        });
    }
    /** get post url and share post */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
    /** show prompt and delete post */
    delete(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (post.uid === this.user.uid) {
                const prompt = yield this.alertCtrl.create({
                    header: this.translate.instant('feed-detail-component.delete-alert-title'),
                    message: this.translate.instant('feed-detail-component.delete-alert-message'),
                    buttons: [
                        {
                            text: this.translate.instant('other.cancel'),
                            role: 'cancel'
                        },
                        {
                            text: this.translate.instant('other.delete-label'),
                            handler: () => {
                                this.feedService.delete(post).then(() => {
                                    this.modalCtrl.dismiss();
                                    this.toast(this.translate.instant('feed-detail-component.confirm-delete'));
                                });
                            }
                        }
                    ]
                });
                yield prompt.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-delete'));
            }
        });
    }
    /** navigate to the next image */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /** navigate to the previous image */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
FeedDetailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"] }
];
FeedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-detail',
        template: __webpack_require__(/*! raw-loader!./feed-detail.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-detail/feed-detail.component.html"),
        styles: [__webpack_require__(/*! ./feed-detail.component.scss */ "./src/pages/feed/components/feed-detail/feed-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"]])
], FeedDetailComponent);



/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 100px) !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxwYWdlc1xcZmVlZFxcY29tcG9uZW50c1xcZmVlZFxcZmVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ0ZSO0FESVE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGVjtBRE9JO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0xOO0FET007RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUNMUiIsImZpbGUiOiJzcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgLmhlYWRlciB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHNtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDUwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC53cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHNtYWxsIHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");









/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
let FeedComponent = class FeedComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, feedService, commonService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.commonService = commonService;
        this.openSearch = false;
        this.views = this.feedService.views;
    }
    /** get current user, get feed
     * handle openPostFromUrl method
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.user = yield this.authService.getUser();
            this.openPostFromUrl();
            this.subscriptions.push(this.feedService.getFeed(this.user.uid).subscribe((feed) => {
                this.feed = [...feed];
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
    openPostFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.viewPost({ id: param.id });
            }
        }));
    }
    /** search friends feed */
    onSearch(val) {
        this.feed = this.feedService.searchFeed(val);
    }
    /** manage feed actions such as likes, comments etc */
    manage(_event) {
        if (_event.type === 'like') {
            this.feedService.like(_event.data);
        }
        else if (_event.type === 'comment') {
            this.comment(_event.data);
        }
        else if (_event.type === 'profile') {
            this.profile(_event.data);
        }
        else if (_event.type === 'share') {
            this.share(_event.data);
        }
        else if (_event.type === 'detail') {
            this.viewPost(_event.data);
        }
        else if (_event.type === 'more') {
            this.more(_event.data);
        }
    }
    /** delete a post */
    delete(post) {
        this.feedService.delete(post);
    }
    /** go to post author's profile page */
    profile(post) {
        this.goto(this.routes.people + '/' + post.user.uid);
    }
    /** open add post modal, add to array of feed after completed */
    addPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], null, 'custom-modal');
            modal.present();
        });
    }
    /** open post details modal, update array of feed if any change is made */
    viewPost(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], post.id);
            modal.present();
        });
    }
    /** open feed's comments */
    comment(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"], post.id);
            modal.present();
        });
    }
    /** open actionsheet for more options */
    more(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-component.more-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-component.more-option-open'),
                        handler: () => {
                            this.viewPost(data);
                        }
                    },
                    {
                        text: this.translate.instant('feed-component.more-option-delete'),
                        handler: () => {
                            this.delete(data);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** share feed to other apps */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
};
FeedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: __webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed/feed.component.html"),
        styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/pages/feed/components/feed/feed.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], FeedComponent);



/***/ }),

/***/ "./src/pages/feed/feed.module.ts":
/*!***************************************!*\
  !*** ./src/pages/feed/feed.module.ts ***!
  \***************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/card-views/card-views.module */ "./src/shared/card-views/card-views.module.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/pages/feed/components/feed/feed.component.ts");










let FeedModule = class FeedModule {
};
FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"], _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], _components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"]],
        entryComponents: [_components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__["CardViewsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"] }]),
        ],
    })
], FeedModule);



/***/ }),

/***/ "./src/shared/card-views/card-views.module.ts":
/*!****************************************************!*\
  !*** ./src/shared/card-views/card-views.module.ts ***!
  \****************************************************/
/*! exports provided: CardViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewsModule", function() { return CardViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minimal/minimal.component */ "./src/shared/card-views/minimal/minimal.component.ts");
/* harmony import */ var _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modern/modern.component */ "./src/shared/card-views/modern/modern.component.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/shared/card-views/showcase/showcase.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/shared/card-views/timeline/timeline.component.ts");








let CardViewsModule = class CardViewsModule {
};
CardViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
        providers: [],
    })
], CardViewsModule);



/***/ }),

/***/ "./src/shared/card-views/minimal/minimal.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/minimal/minimal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n}\n:host .image-content .image-item {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 80px;\n  border-radius: 6px;\n  margin: 10px 2px;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content .title {\n  font-size: 14px;\n  font-weight: 600;\n}\n:host .content .subtitle {\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 5px;\n  margin-top: 10px;\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY2FyZC12aWV3cy9taW5pbWFsL0M6XFxVc2Vyc1xcZGQ0MjRcXGRlc2t0b3BcXERldmVsb3BcXGV6eWFwcHNfdWstY29tcGxldGUtZmlyZS1zdGFydGVyLWM2MjhkM2ZjMWZkZS9zcmNcXHNoYXJlZFxcY2FyZC12aWV3c1xcbWluaW1hbFxcbWluaW1hbC5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy9taW5pbWFsL21pbmltYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtFQUNBLGtDQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNBTjtBREVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQVI7QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDRFI7QURNRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0pKO0FETUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBRFFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDTko7QURRSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ05OO0FEU0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBRFdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFVJO0VBQ0UsaUJBQUE7QUNSTjtBRFVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDUk47QURXSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ1ROIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9taW5pbWFsL21pbmltYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcblxuICAuYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmltYWdlIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuaW1hZ2UtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW46IDEwcHggMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBzbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLnN0YXJ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5lbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuYXV0aG9yIC5pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmltYWdlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbjogMTBweCAycHg7XG59XG46aG9zdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAuY29udGVudCAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG46aG9zdCAuYWN0aW9ucyBzbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuOmhvc3QgLmFjdGlvbnMgLnN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5hY3Rpb25zIC5lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/card-views/minimal/minimal.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/card-views/minimal/minimal.component.ts ***!
  \************************************************************/
/*! exports provided: MinimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalComponent", function() { return MinimalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let MinimalComponent = class MinimalComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /** emits event with type and feed */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** get user on component init */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /** onclick emit event with event name and data */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
};
MinimalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MinimalComponent.prototype, "feed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], MinimalComponent.prototype, "event", void 0);
MinimalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'feed-minimal',
        template: __webpack_require__(/*! raw-loader!./minimal.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/minimal/minimal.component.html"),
        styles: [__webpack_require__(/*! ./minimal.component.scss */ "./src/shared/card-views/minimal/minimal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], MinimalComponent);



/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .start,\n:host .end {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .start {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: 10px;\n}\n:host .start .title {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host .start .content {\n  font-size: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .start .author {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .start .author .name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .start .author .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .start .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .start .actions ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n:host .start .actions small {\n  padding-left: 5px;\n}\n:host .end .image {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n}\n:host .end .image .left,\n:host .end .image .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.4);\n  padding: 2px 0;\n  color: var(--ion-color-light);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .end .image .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vQzpcXFVzZXJzXFxkZDQyNFxcZGVza3RvcFxcRGV2ZWxvcFxcZXp5YXBwc191ay1jb21wbGV0ZS1maXJlLXN0YXJ0ZXItYzYyOGQzZmMxZmRlL3NyY1xcc2hhcmVkXFxjYXJkLXZpZXdzXFxtb2Rlcm5cXG1vZGVybi5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vbW9kZXJuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7QUNDRjtBRENFOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0NKO0FERUU7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNETjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0ZSO0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0hSO0FET0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTE47QURPTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRFFNO0VBQ0UsaUJBQUE7QUNOUjtBRFlJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQ1ZOO0FEV007O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1RSO0FEWU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNWUiIsImZpbGUiOiJzcmMvc2hhcmVkL2NhcmQtdmlld3MvbW9kZXJuL21vZGVybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5zdGFydCxcbiAgLmVuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLnN0YXJ0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgfVxuXG4gICAgLmF1dGhvciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLnB1Ymxpc2gtZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgfVxuXG4gICAgICBzbWFsbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbmQge1xuICAgIC5pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgLmxlZnQsXG4gICAgICAucmlnaHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5zdGFydCxcbjpob3N0IC5lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLnN0YXJ0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgLnN0YXJ0IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IC5zdGFydCAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5zdGFydCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuc3RhcnQgLmF1dGhvciAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5zdGFydCAuYXV0aG9yIC5wdWJsaXNoLWRhdGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5zdGFydCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuc3RhcnQgLmFjdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbn1cbjpob3N0IC5zdGFydCAuYWN0aW9ucyBzbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuOmhvc3QgLmVuZCAuaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuOmhvc3QgLmVuZCAuaW1hZ2UgLmxlZnQsXG46aG9zdCAuZW5kIC5pbWFnZSAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcbiAgcGFkZGluZzogMnB4IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5lbmQgLmltYWdlIC5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.ts ***!
  \**********************************************************/
/*! exports provided: ModernComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernComponent", function() { return ModernComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let ModernComponent = class ModernComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
ModernComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModernComponent.prototype, "feed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ModernComponent.prototype, "event", void 0);
ModernComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'feed-modern',
        template: __webpack_require__(/*! raw-loader!./modern.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/modern/modern.component.html"),
        styles: [__webpack_require__(/*! ./modern.component.scss */ "./src/shared/card-views/modern/modern.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ModernComponent);



/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  height: 200px;\n  width: 100%;\n}\n:host .image-content .left,\n:host .image-content .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.6);\n  padding: 0 15px;\n  color: var(--ion-color-light);\n}\n:host .image-content .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .image-content .right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px 15px;\n}\n:host .content .content-header {\n  display: -webkit-box;\n  display: flex;\n}\n:host .content .content-header .feed-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .content-header .feed-info .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .content .content-header .feed-info .subtitle {\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .content .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0;\n}\n:host .content .author .image {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n}\n:host .content .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .author .details .name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .content .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n:host .content .actions small {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY2FyZC12aWV3cy9zaG93Y2FzZS9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxzaGFyZWRcXGNhcmQtdmlld3NcXHNob3djYXNlXFxzaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjtBRENJOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrREFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NOO0FERUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNBTjtBREdJO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtBQ0ROO0FES0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0hKO0FES0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNITjtBREtNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDSFI7QURLUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDSFY7QURNUTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKVjtBRFNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUFI7QURVTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNSUjtBRFVRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNSVjtBRFdRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNUVjtBRGNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtEQUFBO0FDWk47QURjTTtFQUNFLGlCQUFBO0FDWlIiLCJmaWxlIjoic3JjL3NoYXJlZC9jYXJkLXZpZXdzL3Nob3djYXNlL3Nob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG5cbiAgLmltYWdlLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5sZWZ0LFxuICAgIC5yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjYpO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAucmlnaHQge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcblxuICAgIC5jb250ZW50LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAuZmVlZC1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hdXRob3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgICAgLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgfVxuXG4gICAgICAuZGV0YWlscyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wdWJsaXNoLWRhdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgICAgIHNtYWxsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAubGVmdCxcbjpob3N0IC5pbWFnZS1jb250ZW50IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjYpO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG46aG9zdCAuY29udGVudCAuY29udGVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8gLnN1YnRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2Uge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let ShowcaseComponent = class ShowcaseComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
ShowcaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ShowcaseComponent.prototype, "feed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ShowcaseComponent.prototype, "event", void 0);
ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'feed-showcase',
        template: __webpack_require__(/*! raw-loader!./showcase.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/showcase/showcase.component.html"),
        styles: [__webpack_require__(/*! ./showcase.component.scss */ "./src/shared/card-views/showcase/showcase.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ShowcaseComponent);



/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 25px 20px;\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n}\n:host .content .info-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  background: var(--ion-color-light);\n  margin-left: 10px;\n  padding: 10px;\n}\n:host .content .info-content .image-content {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n:host .content .info-content .image-content .image-item {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 80px;\n  border-radius: 6px;\n  margin: 10px 2px;\n}\n:host .content .info-content .title {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 0;\n}\n:host .content .info-content .subtitle {\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -5px;\n}\n:host .actions small {\n  padding-left: 3px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZWQvY2FyZC12aWV3cy90aW1lbGluZS9DOlxcVXNlcnNcXGRkNDI0XFxkZXNrdG9wXFxEZXZlbG9wXFxlenlhcHBzX3VrLWNvbXBsZXRlLWZpcmUtc3RhcnRlci1jNjI4ZDNmYzFmZGUvc3JjXFxzaGFyZWRcXGNhcmQtdmlld3NcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQU47QURFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0RSO0FETUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNKSjtBRE1JO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNKTjtBREtNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtBQ0hSO0FESVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGVjtBRE1NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDUko7QURTSTtFQUNFLGlCQUFBO0FDUE47QURVSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ1JOO0FEV0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNUTiIsImZpbGUiOiJzcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDI1cHggMjBweDtcblxuICAuYXV0aG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmltYWdlIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAucHVibGlzaC1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuaW5mby1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleDogMTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAuaW1hZ2UtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuaW1hZ2UtaXRlbSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgfVxuXG4gICAgLnN0YXJ0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5lbmQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjVweCAyMHB4O1xufVxuOmhvc3QgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuYXV0aG9yIC5pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmluZm8tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmluZm8tY29udGVudCAuaW1hZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQgLmluZm8tY29udGVudCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxMHB4IDJweDtcbn1cbjpob3N0IC5jb250ZW50IC5pbmZvLWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG46aG9zdCAuYWN0aW9ucyBzbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuOmhvc3QgLmFjdGlvbnMgLnN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5hY3Rpb25zIC5lbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let TimelineComponent = class TimelineComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
};
TimelineComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TimelineComponent.prototype, "feed", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TimelineComponent.prototype, "event", void 0);
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'feed-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/timeline/timeline.component.html"),
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/shared/card-views/timeline/timeline.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], TimelineComponent);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map