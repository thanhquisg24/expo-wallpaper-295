import { ByCategoryType, ImageDetailParamsType } from '../../navigators/type';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ImageHit } from 'pixabay-api/dist/PixabayResponse';
import { Layout } from '@ui-kitten/components';
import { customStyles } from '../../custom-style/style';
import { fetchImageFromPixaPay } from '@/src/service/pixapay';
import { getImageNameFromPixaUrl } from '@/src/utils';

const gapSize = 5;
function FlatListItem(props: { item: ImageHit | any }) {
  const { item } = props;
  const navigation = useNavigation();
  const onPress = () => {
    const imageName = getImageNameFromPixaUrl(item.pageURL);
    const params: ImageDetailParamsType = { ...item, title: imageName };
    navigation.navigate('ImageDetail', params);
  };
  return (
    <Layout style={[{ width: '48%' }]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: item.largeImageURL,
          }}
          resizeMode='cover'
          style={customStyles.imageVerticalSize}
        />
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
