/// <reference types="react" />
import { RouteComponentProps } from 'react-router';
export interface MainProps extends RouteComponentProps<any> {
}
export interface MainState {
}
declare const _default: (({ rootStore }: {
    rootStore: {
        user: ({
            name: any;
        } & import("../../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode) | null;
    } & import("../../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode;
}) => JSX.Element) & import("../../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-react").IWrappedComponent<({ rootStore }: {
    rootStore: {
        user: ({
            name: any;
        } & import("../../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode) | null;
    } & import("../../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode;
}) => JSX.Element>;
export default _default;
