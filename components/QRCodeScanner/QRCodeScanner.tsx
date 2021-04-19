import React, {FC} from 'react';
import {Linking, StyleSheet} from 'react-native';

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
      showMarker
      markerStyle={styles.markerStyle}
      topViewStyle={styles.topViewStyle}
      bottomViewStyle={styles.bottomViewStyle}
    />
  );
};

const styles = StyleSheet.create({
  topViewStyle: {
    display: 'none',
  },
  markerStyle: {
    borderColor: '#fff',
  },
  bottomViewStyle: {
    backgroundColor: '#fff',
  },
});
