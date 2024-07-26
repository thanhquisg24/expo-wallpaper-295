import { Icon, IconElement, Input, TopNavigation } from '@ui-kitten/components';

import React from 'react';
import { StyleSheet } from 'react-native';

const SearchIcon = (props: any): IconElement => <Icon {...props} name='search-outline' />;

function SearchBar() {
  return <Input style={styles.input} placeholder='Search...' accessoryRight={SearchIcon} />;
}

export function TopBarSearchBox() {
  return <TopNavigation title={SearchBar} alignment='center' style={styles.navigation} />;
}
const styles = StyleSheet.create({
  navigation: { width: '100%', height: 40 },
  layoutSearch: { padding: 10, width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingTop: 5,
    margin: 2,
    alignContent: 'center',
  },
  button: {
    margin: 2,
  },
});
