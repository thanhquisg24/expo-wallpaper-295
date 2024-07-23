import { ScrollView, View } from 'react-native';

import CategoryList from './explore/CategoryList';
import ColorList from './explore/ColorList';
import { SectionWithTitle } from '../components';
import { customStyles } from '../custom-style/style';

export const ExploreScreen = () => (
  <View style={{ flex: 1 }}>
    <ScrollView style={[customStyles.viewLayout]}>
      <SectionWithTitle title='By Colors'>
        <ColorList />
      </SectionWithTitle>
      <SectionWithTitle title='By Category'>
        <CategoryList />
      </SectionWithTitle>
    </ScrollView>
  </View>
);
