import { Icon, IconElement, Input, Layout, Text, useTheme } from '@ui-kitten/components';
import { useEffect, useState } from 'react';

import { SearchImageParamsType } from '@/src/navigators/type';
import { SearchResultContainer } from './SearchResultContainer';
import { StyleSheet } from 'react-native';
import { get } from 'lodash';
import { useRoute } from '@react-navigation/native';

const SearchIcon = (props: any): IconElement => <Icon {...props} name='search-outline' />;

export const SearchScreen = () => {
  const route = useRoute();
  const params = route.params as SearchImageParamsType;
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const [endSearchText, setEndSearchText] = useState('');

  useEffect(() => {
    const q = get(route.params, 'q', null);
    if (q) {
      setSearchText(q);
      setEndSearchText(q);
    }
  }, [route.params]);

  const isShowSearchResult = endSearchText.trim().length > 0;

  const onSearch = (val: string) => {
    setSearchText(val);
  };
  const onEndEditing = () => {
    setEndSearchText(searchText);
  };

  return (
    <Layout style={{ flex: 1, alignContent: 'flex-start' }}>
      <Layout style={[styles.layoutSearch, { backgroundColor: theme['color-primary-default'] }]}>
        <Input
          style={styles.input}
          placeholder='Search...'
          accessoryLeft={SearchIcon}
          value={searchText}
          onChangeText={onSearch}
          onEndEditing={onEndEditing}
        />
      </Layout>

      {isShowSearchResult ? (
        <SearchResultContainer q={endSearchText} params={params} />
      ) : (
        <Layout style={{ justifyContent: 'center', alignItems: 'center', height: '80%' }}>
          <Text category='h2' style={styles.textEmptySearch}>
            Find your favorite thing, by keyword, in color,and more!
          </Text>
        </Layout>
      )}
    </Layout>
  );
};
const styles = StyleSheet.create({
  textEmptySearch: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  layoutSearch: {
    flexDirection: 'row',
    padding: 10,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    borderRadius: 25,
  },
  button: {
    margin: 2,
  },
});
