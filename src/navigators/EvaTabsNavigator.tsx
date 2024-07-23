import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { ContactScreen, HoneScreen, SearchScreen } from '../screens';
import { EmailIcon, ExploreIcon, HomeIcon, SearchIcon } from '../components';

import { ExploreStackNavigator } from './explore-navigator/ExploreStackNavigator';
import React from 'react';
import { TopTabBar } from '../components/TopTabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { customStyles } from '../custom-style/style';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }: { navigation: any; state: any }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={customStyles.bottomTabBar}
  >
    <BottomNavigationTab title='HOME' icon={HomeIcon} />
    <BottomNavigationTab title='EXPLORE' icon={ExploreIcon} />
    <BottomNavigationTab title='SEARCH' icon={SearchIcon} />
    <BottomNavigationTab title='CONTACT' icon={EmailIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    initialRouteName={'Home'}
    tabBar={(props) => <BottomTabBar {...props} />}
    // screenOptions={{ headerShown: false }}
  >
    <Screen
      name='Home'
      component={HoneScreen}
      options={({ navigation, route }) => {
        return {
          header: () => <TopTabBar navigation={navigation} state={route} title='Home' />,
        };
      }}
    />
    <Screen name='ExploreStack' component={ExploreStackNavigator} options={{ headerShown: false }} />
    <Screen
      name='Search'
      component={SearchScreen}
      options={({ navigation, route }) => {
        return {
          header: () => <TopTabBar navigation={navigation} state={route} title='Search' />,
        };
      }}
    />
    <Screen
      name='Contact'
      component={ContactScreen}
      options={({ navigation, route }) => {
        return {
          header: () => <TopTabBar navigation={navigation} state={route} title='Contact' />,
        };
      }}
    />
  </Navigator>
);

export const EvaTabsNavigator = () => <TabNavigator />;
