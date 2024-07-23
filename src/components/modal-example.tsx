import { Button, Modal, Text, View } from 'react-native';
import React, { useState } from 'react';

const ModalExample: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title='Open Modal' onPress={() => setModalVisible(true)} />

      <Modal visible={modalVisible} animationType='slide' transparent={false}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>This is a modal!</Text>
            <Button title='Close' onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalExample;
