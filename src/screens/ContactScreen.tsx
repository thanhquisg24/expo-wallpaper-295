import { Button, Card, Input, Layout, Text } from '@ui-kitten/components';
import React, { useState } from 'react';

import Modal from 'react-native-modalbox';
import { StyleSheet } from 'react-native';

export const ContactScreen = () => {
  const [visible, setVisible] = useState(false);
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (key: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    setVisible(true);
  };

  return (
    <Layout style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, gap: 10 }}>
        <Text category='h1'>Contact Us</Text>
        <Input
          label={() => (
            <Text category='h6' style={styles.label}>
              Name
            </Text>
          )}
          style={styles.input}
          size='medium'
          placeholder='Name'
          value={state.name}
          onChangeText={(val) => handleChange('name', val)}
        />
        <Input
          label={() => (
            <Text category='h6' style={styles.label}>
              Email
            </Text>
          )}
          style={styles.input}
          size='medium'
          placeholder='Email'
          value={state.email}
          onChangeText={(val) => handleChange('email', val)}
        />
        <Input
          label={() => (
            <Text category='h6' style={styles.label}>
              Phone Number
            </Text>
          )}
          style={styles.input}
          size='medium'
          placeholder='Phone Number'
          value={state.phone}
          onChangeText={(val) => handleChange('phone', val)}
        />
        <Input
          label={() => (
            <Text category='h6' style={styles.label}>
              Message
            </Text>
          )}
          multiline={true}
          textStyle={styles.inputTextStyle}
          placeholder='Message...'
          value={state.message}
          onChangeText={(val) => handleChange('message', val)}
        />
        <Button onPress={handleSubmit} size='large' style={{ width: '100%' }}>
          Submit
        </Button>
      </Layout>

      <Modal
        isOpen={visible}
        onClosed={() => setVisible(false)}
        style={[styles.modal, styles.modal4]}
        position={'center'}
        backdropPressToClose={true}
        // backdropContent={BContent}
      >
        <Card disabled={true} style={{ width: '100%', height: '100%' }}>
          <Layout style={{ height: '88%' }} level='1'>
            <Text
              category='h5'
              style={{
                textAlign: 'center',
                width: '100%',
                marginBottom: 10,
                backgroundColor: 'black',
                color: 'white',
                padding: 10,
              }}
            >
              Thanks for your information!
            </Text>

            <Text category='h6' style={{ width: '100%', marginBottom: 5 }}>
              Name:{' '}
              <Text category='s1' appearance='hint' style={{ width: '100%', textAlign: 'center' }}>
                {state.name}
              </Text>
            </Text>

            <Text category='h6' style={{ width: '100%', marginBottom: 5 }}>
              Email:{' '}
              <Text category='s1' appearance='hint' style={{ width: '100%', textAlign: 'center' }}>
                {state.email}
              </Text>
            </Text>

            <Text category='h6' style={{ width: '100%', marginBottom: 5 }}>
              Phone Number:{' '}
              <Text category='s1' appearance='hint' style={{ width: '100%', textAlign: 'center' }}>
                {state.phone}
              </Text>
            </Text>

            <Text category='h6' style={{ width: '100%', marginBottom: 5 }}>
              Message
            </Text>
            <Text
              category='s1'
              appearance='hint'
              style={{ width: '100%', marginBottom: 5, marginLeft: 10, textAlign: 'left' }}
            >
              {state.message}
            </Text>
          </Layout>

          <Button onPress={() => setVisible(false)} style={{ width: '100%' }}>
            OK
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
};
const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
  inputTextStyle: {
    minHeight: 64,
  },
  label: {
    marginBottom: 5,
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal2: {
    height: 230,
    backgroundColor: '#3B5998',
  },

  modal3: {
    height: 300,
    width: 300,
  },

  modal4: {
    height: 400,
    width: '90%',
    position: 'relative',
  },
});
