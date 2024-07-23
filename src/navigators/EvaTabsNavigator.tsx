import { BottomNavigation, BottomNavigationTab, Icon, IconElement, TopNavigation } from '@ui-kitten/components';
import { ContactScreen, ExploreScreen, HoneScreen, SearchScreen } from '../screens';

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { customStyles } from '../custom-style/style';

const { Navigator, Screen } = createBottomTabNavigator();

const HomeIcon = (props: any): IconElement => <Icon {...props} name='home-outline' />;

const ExploreIcon = (props: any): IconElement => <Icon {...props} name='layers-outline' />;

const EmailIcon = (props: any): IconElement => <Icon {...props} name='email-outline' />;

const SearchIcon = (props: any): IconElement => <Icon {...props} name='search-outline' />;

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
const TopTabBar = ({ navigation, state, title }: { navigation: any; state: any; title: string }) => (
  <TopNavigation title={title} alignment='center' style={{}} />
);

const TabNavigator = () => (
  <Navigator initialRouteName={'Home'} tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen
      name='Home'
      component={HoneScreen}
      options={({ navigation, route }) => {
        return {
          header: () => <TopTabBar navigation={navigation} state={route} title='Home' />,
        };
      }}
    />
    <Screen
      name='Explore'
      component={ExploreScreen}
      options={({ navigation, route }) => {
        return {
          header: () => <TopTabBar navigation={navigation} state={route} title='Explore' />,
        };
      }}
    />
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
