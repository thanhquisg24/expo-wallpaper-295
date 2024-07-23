import { Layout, Text } from '@ui-kitten/components';

import { StyleSheet } from 'react-native';

export function SectionWithTitle(props: { title: string; children: any; layoutStyle?: any }) {
  return (
    <Layout style={[styles.layout, props.layoutStyle]}>
      <Text category='h1' status='basic'>
        {props.title}
      </Text>
      {props.children}
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    marginBottom: 30,
  },
  title: {},
});
