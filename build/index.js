var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { createStores } from 'stores/createStore';
import App from 'containers/App';
import { UserModel } from 'models/UserModel';
import './assets/styles/main.scss';
var history = createBrowserHistory();
var defautlUser = UserModel.create({
    name: 'Default Name'
});
var stores = createStores(history, defautlUser);
var root = (React.createElement(Provider, __assign({}, stores),
    React.createElement(App, { history: history })));
ReactDOM.render(root, document.getElementById('app'));
//# sourceMappingURL=index.js.map