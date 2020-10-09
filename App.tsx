import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'mobx-react';
import RootStore from './src/stores/rootStore';
import StackNav from './src/boot/navigation';
export const rootStore = new RootStore();
class App extends Component {
  render() {
    return (
      <Provider rootStore={rootStore}>
        <StatusBar barStyle="dark-content" />
        <StackNav />
      </Provider>
    );
  }
}

export default App;
