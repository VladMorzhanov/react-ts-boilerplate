var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Router, Switch } from 'react-router';
import styled from 'styled-components';
import Home from 'containers/Home';
import Profile from 'containers/Profile';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"])));
var App = function (_a) {
    var history = _a.history;
    return (React.createElement(Container, null,
        React.createElement(Router, { history: history },
            React.createElement(Switch, null,
                React.createElement(Route, { exact: true, path: "/", component: Home }),
                React.createElement(Route, { exact: true, path: "/profile", component: Profile })))));
};
export default hot(module)(App);
var templateObject_1;
//# sourceMappingURL=index.js.map