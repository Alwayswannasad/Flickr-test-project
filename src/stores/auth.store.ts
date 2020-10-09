import {action, observable} from 'mobx';

class AuthStore {
  @observable email = '';
  @observable public isSucceded = false;
}

export default AuthStore;