import { types } from 'mobx-state-tree';
import { UserModel } from 'models/UserModel';
export var RootStore = types.model('RootStore', {
    user: types.optional(types.maybe(UserModel), null)
});
//# sourceMappingURL=RootStore.js.map