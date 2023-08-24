import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainStyle}>UHCW</Text>
      <Text style={styles.subStyle}>Universal Directory</Text>
      <Text style={styles.disclaimerStyle}>not an official NHS app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    color: 'azure',
    fontSize: 34,
  },
  subStyle: {
    color: 'azure',
    fontSize: 22,
  },
  disclaimerStyle: {
    color: 'lightgreen',
    fontSize: 10,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
});
