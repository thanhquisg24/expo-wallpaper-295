import { ScrollView, View } from 'react-native';

import CategoryList from './CategoryList';
import ColorList from './ColorList';
import { SectionWithTitle } from '../../components';
import { customStyles } from '../../custom-style/style';

export const ExploreScreen = () => (
  <View style={{ flex: 1 }}>
    <ScrollView style={[customStyles.viewLayout]}>
    <SectionWithTitle title='By Category'>
        <CategoryList />
      </SectionWithTitle>
      <SectionWithTitle title='By Colors'>
        <ColorList />
      </SectionWithTitle>
  
    </ScrollView>
  </View>
);
