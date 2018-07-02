import { RootStore } from 'stores/RootStore';
import { RouterStore } from 'stores/RouterStore';
export function createStores(history, user) {
    var rootStore = RootStore.create({ user: user });
    var routerStore = new RouterStore(history);
    return {
        rootStore: rootStore,
        routerStore: routerStore
    };
}
//# sourceMappingURL=createStore.js.map