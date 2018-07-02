import * as React from 'react';
import { inject, observer } from 'mobx-react';
import Header from 'components/Header';
import Container from 'components/Container';
var Profile = function (_a) {
    var rootStore = _a.rootStore;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, { title: "Profile page" }),
        React.createElement(Container, { content: (rootStore && rootStore.user && rootStore.user.name) || '' })));
};
export default inject('rootStore')(observer(Profile));
//# sourceMappingURL=index.js.map