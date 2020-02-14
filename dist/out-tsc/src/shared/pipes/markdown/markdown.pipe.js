import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import * as marked from 'marked';
/** convert text to markdown  */
let MarkdownPipe = class MarkdownPipe {
    transform(value) {
        if (value && value.length > 0) {
            return marked(value);
        }
        return value;
    }
};
MarkdownPipe = tslib_1.__decorate([
    Pipe({
        name: 'markdown'
    })
], MarkdownPipe);
export { MarkdownPipe };
//# sourceMappingURL=markdown.pipe.js.map