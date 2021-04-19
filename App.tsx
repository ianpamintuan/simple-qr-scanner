/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Linking} from 'react-native';

import {QRCodeScanner} from './components/QRCodeScanner/QRCodeScanner';

const App = () => {
  return (
    <QRCodeScanner
      onRead={e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err),
        );
      }}
    />
  );
};

export default App;
