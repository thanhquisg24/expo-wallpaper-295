import { Button, Icon, IconElement, Layout } from '@ui-kitten/components';
import { Image, StyleSheet, View } from 'react-native';

import { ImageDetailParamsType } from '../navigators/type';
import { useRoute } from '@react-navigation/native';

const DownloadIcon = (props: any): IconElement => (
  <Icon {...props} name='arrow-downward' style={[props.style, { width: 32, height: 32 }]} />
);

export const ImageDetailScreen = () => {
  const route = useRoute();
  const params = route.params as ImageDetailParamsType;
  return (
    <Layout style={{ position: 'relative', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{
          uri: params.largeImageURL,
        }}
        // resizeMode='cover'
        style={styles.imageDetail}
      />
      <View style={{ position: 'absolute', bottom: 15 }}>
        <Button appearance='outline' style={styles.btnDownload} accessoryLeft={DownloadIcon}></Button>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnDownload: {
    width: 64,
    height: 64,
    borderRadius: 64,
    fontSize: 24,
  },
  iconDownload: {
    // fontSize: 24,
    width: 30,
    height: 30,
  },
  imageDetail: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
