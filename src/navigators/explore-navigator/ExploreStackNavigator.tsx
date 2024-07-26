import { ExploreScreen } from '../../screens';
import { TopTabBar } from '../../components/TopTabBar';
import { createStackNavigator } from '@react-navigation/stack';

const ExploreStack = createStackNavigator();

export function ExploreStackNavigator() {
  return (
    <ExploreStack.Navigator initialRouteName='Explore' screenOptions={{ headerShown: true }}>
      <ExploreStack.Screen
        name='Explore'
        component={ExploreScreen}
        options={({ navigation, route }) => {
          return {
            header: () => <TopTabBar navigation={navigation} state={route} title='Explore' />,
          };
        }}
      />
      {/* <ExploreStack.Screen
        name='ExploreDetail'
        component={ExploreDetailScreen}
        options={({ navigation, route }) => {
          return {
            header: () => <TopTabBarDetail navigation={navigation} state={route} isGoBack screenNameToBack='Explore' />,
          };
        }}
      /> */}
      {/* <ExploreStack.Screen
        name='ImageDetail'
        component={ImageDetailScreen}
        options={({ navigation, route }) => {
          return {
            header: () => <TopTabBarDetail navigation={navigation} state={route} isGoBack />,
            presentation: 'modal',
          };
        }}
      /> */}
    </ExploreStack.Navigator>
  );
}
