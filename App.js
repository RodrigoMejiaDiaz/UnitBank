import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

const App = () => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: -16.422673702349723,
        longitude: -71.51676037601712,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
      }}
    />
  );
};

export default App;

const styles = StyleSheet.create({
  map: {height: '100%'},
});
