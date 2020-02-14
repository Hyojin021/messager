import * as tslib_1 from "tslib";
import { Component, Injector } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ShareService } from '@ngx-share/core';
import { environment } from 'src/environments/environment';
import { Extender } from 'src/shared/helpers/extender';
/** browser social share using @ngx-share/core*/
let SocialShareComponent = class SocialShareComponent extends Extender {
    constructor(injector, navParam, share) {
        super(injector);
        this.injector = injector;
        this.navParam = navParam;
        this.share = share;
    }
    /** get share configs */
    ngOnInit() {
        this.share.config.url = `${environment.hosting}/${this.navParam.get('data')}`;
        this.socialButtons = [
            {
                text: 'Facebook',
                type: 'facebook'
            },
            {
                text: 'Twitter',
                type: 'twitter'
            },
            {
                text: 'WhatsApp',
                type: 'whatsapp',
                icon: 'message-circle'
            },
            {
                text: 'Email',
                type: 'email',
                color: 'dark',
                icon: 'mail'
            },
            {
                text: 'Copy',
                type: 'copy',
                color: 'medium'
            },
            {
                text: 'Print',
                type: 'print',
                color: 'tertiary',
                icon: 'printer'
            }
        ];
    }
};
SocialShareComponent = tslib_1.__decorate([
    Component({
        selector: 'app-social-share',
        templateUrl: './social-share.component.html',
        styleUrls: ['./social-share.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [Injector, NavParams, ShareService])
], SocialShareComponent);
export { SocialShareComponent };
//# sourceMappingURL=social-share.component.js.map