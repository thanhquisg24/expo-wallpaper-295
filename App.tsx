import * as eva from '@eva-design/material';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';

import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { EvaTabsNavigator } from './src/navigators/EvaTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myTheme } from './custom-eva-themes';

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...myTheme }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <EvaTabsNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
}
