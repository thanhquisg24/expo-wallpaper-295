import { Avatar, Layout } from '@ui-kitten/components';
import { ByCategoryType, ImageDetailParamsType } from '../../navigators/type';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ImageHit } from 'pixabay-api/dist/PixabayResponse';
import { Text } from '@ui-kitten/components';
import { customStyles } from '../../custom-style/style';
import { fetchImageFromPixaPay } from '@/src/service/pixapay';
import { getImageNameFromPixaUrl } from '@/src/utils';
import { useMemo } from 'react';

const gapSize = 5;
function FlatListItem(props: { item: ImageHit | any }) {
  const { item } = props;
  const navigation = useNavigation();
  const onPress = () => {
    const imageName = getImageNameFromPixaUrl(item.pageURL);
    const params: ImageDetailParamsType = { ...item, title: imageName };
    navigation.navigate('ImageDetail', params);
  };
  const avatarSource = useMemo(() => {
    if (item.userImageURL && item.userImageURL.length > 0) {
      return { uri: item.userImageURL };
    }
    return require('./img/favicon.png');
  }, [item.userImageURL]);
  return (
    <Layout style={[{ width: '48%' }]}>
      <TouchableOpacity onPress={onPress} style={{ position: 'relative' }}>
        <Image
          source={{
            uri: item.largeImageURL,
          }}
          resizeMode='cover'
          style={customStyles.imageVerticalSize}
        />
        <View style={{ position: 'absolute', bottom: 7, left: 7, gap: 5 }}>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Avatar size='tiny' source={avatarSource} />
            <Text category='s1' style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              {item.user}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Layout>
  );
}

export const ExploreDetailScreen = () => {
  const route = useRoute();
  const params = route.params as ByCategoryType;
  const { data } = useQuery({
    queryKey: ['fetchImgPixa', params.q],
    queryFn: () => fetchImageFromPixaPay(params.q, params),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  return (
    <Layout style={{ flex: 1 }}>
      <FlatList
        contentContainerStyle={{ gap: gapSize, paddingBottom: 30 }}
        columnWrapperStyle={{ gap: gapSize }}
        style={{ paddingLeft: 10, marginTop: 5 }}
        numColumns={2}
        key={2}
        data={data ? data.hits : []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return <FlatListItem item={item}></FlatListItem>;
        }}
      ></FlatList>
    </Layout>
  );
};
