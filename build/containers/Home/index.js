import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Header from 'components/Header';
import Container from 'components/Container';
var Home = function (_a) {
    var rootStore = _a.rootStore;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { title: "Home Page" }),
        React.createElement(Container, { content: "Home page content" }),
        (rootStore && rootStore.user && rootStore.user.name) || ''));
};
export default inject('rootStore')(observer(Home));
//# sourceMappingURL=index.js.map