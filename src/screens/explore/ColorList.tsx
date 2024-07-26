import { TouchableOpacity, View } from 'react-native';

import { ByColor } from '../../navigators/type';
import React from 'react';
import { Text } from '@ui-kitten/components';
import { customStyles } from '../../custom-style/style';
import { useNavigation } from '@react-navigation/native';

const data = [
  // { id: '1', color: 'grayscale', title: 'Grayscale', backgroundColor: 'grayscale' },
  { id: '2', color: 'red', title: 'Red', backgroundColor: 'red' },
  { id: '3', color: 'orange', title: 'Orange', backgroundColor: 'orange' },
  { id: '4', color: 'yellow', title: 'Yellow', backgroundColor: 'yellow' },
  { id: '5', color: 'green', title: 'Green', backgroundColor: 'green' },
  // { id: '6', color: 'green', title: 'Green', backgroundColor: 'green' },
  { id: '7', color: 'turquoise', title: 'Turquoise', backgroundColor: 'turquoise' },
  { id: '8', color: 'blue', title: 'Blue', backgroundColor: 'blue' },
  { id: '10', color: 'pink', title: 'Pink', backgroundColor: 'pink' },
  { id: '11', color: 'white', title: 'White', backgroundColor: 'white' },
  { id: '12', color: 'gray', title: 'Gray', backgroundColor: 'gray' },
  // { id: '13', color: 'lilac', title: 'Lilac', backgroundColor: 'lilac' },
  { id: '15', color: 'black', title: 'Black', backgroundColor: 'black' },
  { id: '17', color: 'brown', title: 'Brown', backgroundColor: 'brown' },
];

interface IColorItem {
  id: string;
  color: string;
  backgroundColor: string;
  title: string;
}

const ColorItem = (props: { item: IColorItem }) => {
  const { item } = props;
  const navigation = useNavigation();
  const onPress = () => {
    const params: ByColor = { color: item.color, title: item.title, q: item.color };
    navigation.navigate('Search', params);
  };
  return (
    <TouchableOpacity style={{ flexDirection: 'column', alignItems: 'center', width: '33.33%' }} onPress={onPress}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: item.backgroundColor,
        }}
      />
      <Text category='s1' style={customStyles.textBottomIcon}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

// export default function ColorList() {
//   return <FlatList       horizontal={true}
//   scrollEnabled={false}
//   nestedScrollEnabled data={data} keyExtractor={(item) => item.id} renderItem={ColorItem} />;
// }

export default function ColorList() {
  return (
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', rowGap: 5, width: '100%', height: '100%' }}>
      {data.map((item) => (
        <ColorItem key={item.id} item={item} />
      ))}
    </View>
  );
}
