import React, { useMemo } from 'react';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';

import { BackIcon } from '../components';
import { RouteProp } from '@react-navigation/native';
import { TouchableWebElement } from '@ui-kitten/components/devsupport';

interface ITopTabBarProps {
  navigation: any;
  state: RouteProp<any, any>;
  title: string;
  isGoBack?: boolean;
  screenNameToBack?: string;
}
export const TopTabBar = (props: ITopTabBarProps) => {
  const { title, state, isGoBack, navigation, screenNameToBack } = props;

  const renderBackAction = (): TouchableWebElement => {
    const onBackPress = () => {
      if (isGoBack) {
        if (screenNameToBack) {
          navigation.navigate(screenNameToBack);
        } else {
          navigation.goBack();
        }
      }
    };
    return <TopNavigationAction icon={BackIcon} onPress={() => onBackPress()} />;
  };

  return <TopNavigation title={title} alignment='center' accessoryLeft={isGoBack ? renderBackAction : undefined} />;
};

export const TopTabBarDetail = (props: Omit<ITopTabBarProps, 'title'>) => {
  const { state } = props;
  const title = useMemo(() => {
    return state?.params?.title || 'Explore Detail';
  }, [state]);

  return <TopTabBar title={title} {...props} />;
};
