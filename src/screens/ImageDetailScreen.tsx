import { Layout, Text } from '@ui-kitten/components';

import { ImageDetailParamsType } from '../navigators/type';
import { useRoute } from '@react-navigation/native';

export const ImageDetailScreen = () => {
  const route = useRoute();
  const params = route.params as ImageDetailParamsType;
  console.log('🚀 ~ file: ImageDetailScreen.tsx:9 ~ ImageDetailScreen ~ params:', params);
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>ImageDetailScreen</Text>
    </Layout>
  );
};
