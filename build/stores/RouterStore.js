var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router';
var RouterStore = (function (_super) {
    __extends(RouterStore, _super);
    function RouterStore(history) {
        var _this = _super.call(this) || this;
        if (history) {
            _this.history = syncHistoryWithStore(history, _this);
        }
        return _this;
    }
    return RouterStore;
}(BaseRouterStore));
export { RouterStore };
//# sourceMappingURL=RouterStore.js.map