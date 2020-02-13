var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePickerOriginal = /** @class */ (function (_super) {
    __extends(ImagePickerOriginal, _super);
    function ImagePickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePickerOriginal.prototype.getPictures = function (options) { return cordova(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePickerOriginal.prototype.hasReadPermission = function () { return cordova(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.prototype.requestReadPermission = function () { return cordova(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePickerOriginal.pluginName = "ImagePicker";
    ImagePickerOriginal.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePickerOriginal.pluginRef = "window.imagePicker";
    ImagePickerOriginal.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePickerOriginal.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePickerOriginal.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePickerOriginal.platforms = ["Android", "iOS"];
    return ImagePickerOriginal;
}(IonicNativePlugin));
var ImagePicker = new ImagePickerOriginal();
export { ImagePicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXFEeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF1Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O3NCQWhJdkI7RUFnR2lDLGlCQUFpQjtTQUFyQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJbWFnZVBpY2tlck9wdGlvbnMge1xuICAvKipcbiAgICogbWF4IGltYWdlcyB0byBiZSBzZWxlY3RlZCwgZGVmYXVsdHMgdG8gMTUuIElmIHRoaXMgaXMgc2V0IHRvIDEsIHVwb24gc2VsZWN0aW9uIG9mIGEgc2luZ2xlIGltYWdlLCB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIGl0LiAoQW5kcm9pZCBvbmx5KVxuICAgKi9cbiAgbWF4aW11bUltYWdlc0NvdW50PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBNYXggd2lkdGggdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IGhlaWdodCB0byBhbGxvdyBpbWFnZXMgdG8gYmVcbiAgICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKipcbiAgICogUXVhbGl0eSBvZiBpbWFnZXMsIGRlZmF1bHRzIHRvIDEwMFxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogVmlkZW9zIGFsbG93ZWQ/XG4gICAqL1xuICBhbGxvd192aWRlbz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIHRoZSBkZWZhdWx0IGlzIHRoZSBtZXNzYWdlIG9mIHRoZSBvbGQgcGx1Z2luIGltcGxcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiB0aGUgb2xkIHBsdWdpbiBpbXBsIGRpZG4ndCBoYXZlIGl0LCBzbyBwYXNzaW5nIG51bGwgYnkgZGVmYXVsdFxuICAgKi9cbiAgbWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZS5cbiAgICogRGVmaW5lZCBpbiBJbWFnZVBpY2tlci5PdXRwdXRUeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxuICAgKiAgICAgIEZJTEVfVVJJIDogMCwgICBSZXR1cm4gaW1hZ2UgZmlsZSBVUkksXG4gICAqICAgICAgREFUQV9VUkwgOiAxLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAgICovXG4gIG91dHB1dFR5cGU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGlPUyBwb3BvdmVyIGFzIHNlZW4gb24gaVBhZFxuICAgKi9cbiAgZGlzYWJsZV9wb3BvdmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGVudW0gT3V0cHV0VHlwZSB7XG4gIEZJTEVfVVJMID0gMCxcbiAgREFUQV9VUkxcbn1cblxuLyoqXG4gKiBAbmFtZSBJbWFnZSBQaWNrZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ29yZG92YSBQbHVnaW4gRm9yIE11bHRpcGxlIEltYWdlIFNlbGVjdGlvblxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4taW1hZ2UtcGlja2VyYC5cbiAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIGh0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXJcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEltYWdlUGlja2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbWFnZS1waWNrZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbWFnZVBpY2tlcjogSW1hZ2VQaWNrZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuaW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMob3B0aW9ucykudGhlbigocmVzdWx0cykgPT4ge1xuICogICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAqICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBVUkk6ICcgKyByZXN1bHRzW2ldKTtcbiAqICAgfVxuICogfSwgKGVycikgPT4geyB9KTtcbiAqXG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBJbWFnZVBpY2tlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbWFnZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXInLFxuICBwbHVnaW5SZWY6ICd3aW5kb3cuaW1hZ2VQaWNrZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlbGVyaWstVmVyaWZpZWQtUGx1Z2lucy9JbWFnZVBpY2tlcicsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdGVsZXJpay1pbWFnZXBpY2tlciAtLXZhcmlhYmxlIFBIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT049XCJ5b3VyIHVzYWdlIG1lc3NhZ2VcIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUEhPVE9fTElCUkFSWV9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVBpY2tlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFBpY2sgcGljdHVyZXMgZnJvbSB0aGUgbGlicmFyeS5cbiAgICogQHBhcmFtIHtJbWFnZVBpY2tlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0aGUgaW1hZ2UgZmlsZSBVUklcbiAgICogb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZXMob3B0aW9uczogSW1hZ2VQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgd2UgaGF2ZSBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgd2UgaGF2ZSBwZXJtaXNzaW9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIHJlYWQgaW1hZ2VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxuICB9KVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19