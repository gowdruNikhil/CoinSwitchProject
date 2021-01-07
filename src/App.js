import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import RootNavigator from './navigation';
import AppStore from './store/store.index';

const App = () => {
  /**
   * The useColorScheme React hook provides and subscribes to color scheme
   * updates from the Appearance module. This will help automatically
   * switch from light theme to dark theme, based on user preference.
   */
  // const colorScheme = useColorScheme();
  return (
    <StoreProvider store={AppStore}>
        <RootNavigator />
    </StoreProvider>
  );
}

export default App;
