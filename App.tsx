import React from 'react';
import {Alert, Linking} from 'react-native';
import {QRCodeScanner} from './components/QRCodeScanner/QRCodeScanner';

const App = () => {
  return (
    <QRCodeScanner
      onRead={async e => {
        const supported = await Linking.canOpenURL(e.data);
        if (supported) {
          await Linking.openURL(e.data).catch(error =>
            Alert.alert('Error', 'An error occurred'),
          );
        } else {
          Alert.alert('Error', "Can't open url");
        }
      }}
    />
  );
};

export default App;
