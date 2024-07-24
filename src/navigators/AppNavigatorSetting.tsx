/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 */

import { EvaTabsNavigator } from './EvaTabsNavigator';
import { ImageDetailScreen } from '../screens/ImageDetailScreen';
import { TopTabBarDetail } from '../components/TopTabBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 *
 */

export type RootStackParamList = {
  Home: undefined;
  // 🔥 Your screens go here
  Explore: any;
  ExploreStack: any;
  ExploreDetail: any;
  ImageDetail: any;
  Search: undefined;
  Contact: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'EvaTabs'} screenOptions={{ headerShown: false }}>
      <Stack.Screen name='EvaTabs' component={EvaTabsNavigator} />
      <Stack.Screen
        name='ImageDetail'
        component={ImageDetailScreen}
        options={({ navigation, route }) => {
          return {
            header: () => <TopTabBarDetail navigation={navigation} state={route} isGoBack />,
            headerShown: true,
          };
        }}
      />
    </Stack.Navigator>
  );
};

// export interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

// export const AppNavigator = (props: NavigationProps) => {
//   return (
//     <NavigationContainer
//       // theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}
//       {...props}
//     >
//       <StatusBar />
//       <AppStack />
//     </NavigationContainer>
//   );
// };
