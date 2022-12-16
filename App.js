import { React } from 'react'
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux'
import { store } from './redux/store';
import MainStackNavigation from './navigation/MainStackNavigation';



export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
