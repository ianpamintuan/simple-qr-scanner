import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {default as QRCodeScannerComponent} from 'react-native-qrcode-scanner';

interface QRCodeScannerProps {
  onRead: (e: any) => void;
}

export const QRCodeScanner: FC<QRCodeScannerProps> = ({onRead}) => {
  return (
    <QRCodeScannerComponent
      onRead={onRead}
      reactivate
      reactivateTimeout={3000}
      showMarker
      markerStyle={styles.markerStyle}
      topViewStyle={styles.topViewStyle}
      bottomViewStyle={styles.bottomViewStyle}
      bottomContent={
        <TouchableOpacity>
          <Text style={styles.bottomContentText}>Scan QR code</Text>
        </TouchableOpacity>
      }
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
  bottomContentText: {
    color: 'red',
    fontSize: 18,
  },
});
