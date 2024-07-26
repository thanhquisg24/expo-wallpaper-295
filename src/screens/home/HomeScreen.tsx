import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

export function HoneScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={styles.homeImgContainer}>
        <Image source={require('./img/logo-react.png')} style={styles.homeImg} resizeMode='cover' />
      </Layout>
      <Layout style={styles.textContainer}>
        <Layout style={styles.containerBetween}>
          <Text category='h6' style={styles.textTitle}>
            Họ Tên:
          </Text>
          <Text category='h6'>Nguyễn Thanh Qui</Text>
        </Layout>
        <Layout style={styles.containerBetween}>
          <Text category='h6' style={styles.textTitle}>
            Email:
          </Text>
          <Text category='h6'>thanhquisg24@gmail.com</Text>
        </Layout>
        <Layout style={styles.containerBetween}>
          <Text category='h6' style={styles.textTitle}>
            Lớp:
          </Text>
          <Text category='h6'>ReactNative 295</Text>
        </Layout>
        <Layout style={styles.containerBetween}>
          <Text category='h6' style={styles.textTitle}>
            Giảng viên:
          </Text>
          <Text category='h6'>Nguyễn Anh Tuấn</Text>
        </Layout>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeImgContainer: { justifyContent: 'center', alignItems: 'center', paddingVertical: 50 },
  homeImg: { width: 300, height: 300, borderRadius: 150 },
  textContainer: {
    paddingHorizontal: 50,
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: 200,
  },
  containerBetween: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  textTitle: { color: 'black', fontWeight: 'bold' },
});
