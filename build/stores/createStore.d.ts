import { History } from 'history';
import { RouterStore } from 'stores/RouterStore';
import { UserModel } from 'models/UserModel';
export declare function createStores(history: History, user: typeof UserModel.Type): {
    rootStore: {
        user: ({
            name: any;
        } & import("../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode) | null;
    } & import("../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode & {} & import("../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/type/type").ISnapshottable<import("../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/types/complex-types/model").Snapshot<{
        user: ({
            name: any;
        } & import("../../../../../../Users/morzhanov/git/react-ts-boilerplate/node_modules/mobx-state-tree/dist/core/node/node-utils").IStateTreeNode) | null;
    }>>;
    routerStore: RouterStore;
};
