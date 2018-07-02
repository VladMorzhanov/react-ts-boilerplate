var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: calc(100% - 64px);\n  width: 100%;\n  color: #348599;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  background-color: #fff;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  height: calc(100% - 64px);\n  width: 100%;\n  color: #348599;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  background-color: #fff;\n  align-items: center;\n  justify-content: center;\n"])));
var Container = function (_a) {
    var rootStore = _a.rootStore, content = _a.content;
    return (React.createElement(Wrapper, null,
        content,
        rootStore && rootStore.user && rootStore.user.name));
};
export default inject('rootStore')(observer(Container));
var templateObject_1;
//# sourceMappingURL=index.js.map