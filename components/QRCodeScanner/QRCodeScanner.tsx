import React, {FC} from 'react';
import {Linking} from 'react-native';

import {default as QRCodeScannerComponent} from 'react-native-qrcode-scanner';

interface QRCodeScannerProps {
  onRead: (e: any) => void;
}

export const QRCodeScanner: FC<QRCodeScannerProps> = ({
  onRead = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  },
}) => {
  return (
    <QRCodeScannerComponent
      onRead={onRead}
      reactivate
      reactivateTimeout={3000}
    />
  );
};
