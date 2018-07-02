import { History } from 'history';
import { RootStore } from 'stores/RootStore';
import { RouterStore } from 'stores/RouterStore';
import { UserModel } from 'models/UserModel';

export function createStores(history: History, user: typeof UserModel.Type) {
  const rootStore = RootStore.create({ user: user });
  const routerStore = new RouterStore(history);
  return {
    rootStore,
    routerStore
  };
}
