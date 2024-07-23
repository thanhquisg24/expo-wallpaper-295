/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 */

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
// const Stack = createNativeStackNavigator();

// const AppStack = () => {
//   return (
//     <Stack.Navigator initialRouteName={'Home'}>
//       <Stack.Screen name='Home' component={HoneScreen} options={{ headerShown: true }} />
//     </Stack.Navigator>
//   );
// };

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
