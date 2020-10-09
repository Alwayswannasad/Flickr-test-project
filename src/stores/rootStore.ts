import AuthStore from './auth.store';
import SearchStore from './search.store';

export default class RootStore {
  authStore: AuthStore;
  searchStore: SearchStore;
  constructor() {
    this.authStore = new AuthStore(this);
    this.searchStore = new SearchStore(this);
  }
}
