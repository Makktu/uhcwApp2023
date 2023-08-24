import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function GoBack() {
  return (
    <View style={styles.backContainerStyle}>
      <Text style={styles.backStyle}>⬅️ Go Back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backStyle: {
    fontSize: 44,
    color: 'gold',
  },
  backContainerStyle: {
    marginVertical: 100,
  },
});
