import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function InfoBox() {
  return (
    <>
      <View style={styles.boxOne}>
        <Text style={styles.infoTextStyle}>
          Search for: Room Numbers by NAME or PARTIAL. E.g. you can search for
          'security' or 'ward 12' or 'ADF1'
        </Text>
      </View>
      <View style={styles.boxTwo}>
        <Text style={styles.infoTextStyle}>
          Search Phone numbers the same way.{'\n'}You can pick from Areas.
          {'\n'}You can place a call from this app (opens your native phone
          app).
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  infoTextStyle: {
    color: 'azure',
    fontSize: 18,
  },
  boxOne: {
    marginHorizontal: 30,
  },
  boxTwo: {
    marginHorizontal: 30,
    marginTop: 10,
  },
});
