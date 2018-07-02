var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
var Wrapper = styled.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  width: 100%;\n  height: 64px;\n  background-color: rgba(78, 94, 255, 0.7);\n  text-align: center;\n  line-height: 64px;\n"], ["\n  color: #ffffff;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  width: 100%;\n  height: 64px;\n  background-color: rgba(78, 94, 255, 0.7);\n  text-align: center;\n  line-height: 64px;\n"])));
var Header = function (_a) {
    var title = _a.title;
    return (React.createElement(Wrapper, null,
        React.createElement("div", null, title)));
};
export default observer(Header);
var templateObject_1;
//# sourceMappingURL=index.js.map