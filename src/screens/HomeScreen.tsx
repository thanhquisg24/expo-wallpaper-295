import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import ModalExample from '../components/modal-example';
import { StatusBar } from 'expo-status-bar';
import { customStyles } from '../custom-style/style';
import { getImageNameFromPixaUrl } from '../utils';
import { searchImages } from '../service/pixapay';
import { useEffect } from 'react';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
export function HoneScreen() {
  // useMemo(() => {
  //   setState(state + 1);
  //   const a = state + 1;
  //   return a;
  // }, []);

  // const [first, setfirst] = useState('');
  useEffect(() => {
    const URL = 'https://pixabay.com/photos/dog-puppy-catch-treat-5021242/';
    const a = getImageNameFromPixaUrl(URL);
    console.log('🚀 ~ file: HomeScreen.tsx:25 ~ useEffect ~ a :', a);
    // searchImages('nature', {
    //   per_page: 10,
    //   page: 1,
    //   orientation: 'vertical',
    //   image_type: 'photo',
    //   min_width: 720,
    //   min_height: 1200,
    // }).then((rs) => {
    //   console.log('🚀 ~ file: HomeScreen.tsx:23 ~ useEffect ~ rs:', JSON.stringify(rs));
    // });
  }, []);

  return (
    <View style={[styles.container]}>
      <ScrollView style={customStyles.viewLayout}>
        <ModalExample />
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
