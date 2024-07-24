import 'react-native-gesture-handler';

import * as eva from '@eva-design/material';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AppStack } from './src/navigators/AppNavigatorSetting';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { EvaTabsNavigator } from './src/navigators/EvaTabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { myTheme } from './custom-eva-themes';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...myTheme }}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            {/* <EvaTabsNavigator /> */}
            <AppStack />
          </NavigationContainer>
        </SafeAreaView>
      </ApplicationProvider>
    </QueryClientProvider>
  );
}
