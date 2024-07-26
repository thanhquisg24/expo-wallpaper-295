import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ByCategoryType } from '../../navigators/type';
import React from 'react';
import { Text } from '@ui-kitten/components';
import { customStyles } from '../../custom-style/style';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', category: 'animals', title: 'Animals', source: require('./img/animals.jpg') },
  { id: '2', category: 'background', title: 'Background', source: require('./img/background.png') },
  { id: '3', category: 'education', title: 'Education', source: require('./img/education.jpg') },
  { id: '4', category: 'fashion', title: 'Fashion', source: require('./img/fashion.jpg') },
  { id: '5', category: 'food', title: 'Food', source: require('./img/food.jpg') },
  { id: '6', category: 'music', title: 'Music', source: require('./img/music.jpg') },
  { id: '7', category: 'nature', title: 'Nature', source: require('./img/nature.jpg') },
  { id: '8', category: 'places', title: 'Places', source: require('./img/places.jpg') },
  { id: '9', category: 'science', title: 'Science', source: require('./img/science.jpg') },
  { id: '10', category: 'sports', title: 'Sports', source: require('./img/sports.jpg') },
];

interface ICategoryItem {
  id: string;
  category: string;
  title: string;
  source: any;
}

const CategoryItem = (props: { item: ICategoryItem }) => {
  const { item } = props;
  const navigation = useNavigation();
  const onPress = () => {
    const params: ByCategoryType = { category: item.category, title: item.title, q: item.category };
    navigation.navigate('Search', params);
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground source={item.source} resizeMode='cover' style={styles.image}>
          <Text category='h4' style={styles.text}>
            {item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default function CategoryList() {
  return (
    <View style={{ flex: 1, flexDirection: 'column', rowGap: 10, width: '100%', height: '100%' }}>
      {data.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: 170,
    borderRadius: 30,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
