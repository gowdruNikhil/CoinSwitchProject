import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;

const RootComponent = App;
AppRegistry.registerComponent(appName, () => RootComponent);
