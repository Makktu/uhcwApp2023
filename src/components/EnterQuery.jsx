import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';

export default function EnterQuery() {
  const [enteredQuery, setEnteredQuery] = useState('');

  const enteredQueryHandler = (enteredText) => {
    setEnteredQuery(enteredText.toUpperCase());
  };

  const searchHandler = () => {
    if (!enteredQuery) console.log('❌ ALERT');
    console.log('searching for', enteredQuery);
    resetHandler();
  };

  const resetHandler = () => {
    console.log('resetting searchbox');
    setEnteredQuery('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Search'
        placeholderTextColor={'silver'}
        style={styles.numberInputStyle}
        maxLength={20}
        autoCapitalize='none'
        autoCorrect={false}
        value={enteredQuery}
        onChangeText={enteredQueryHandler}
      />
      <View style={styles.buttonsContainer}>
        <PrimaryButton whenPressed={resetHandler}>Reset</PrimaryButton>
        <PrimaryButton whenPressed={searchHandler}>Search</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resetButtonStyle: {
    width: 100,
    height: 50,
    backgroundColor: 'purple',
  },
  numberInputStyle: {
    height: 50,
    width: '100%',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    opacity: 0.8,
    marginHorizontal: 24,
    marginTop: 100,
    padding: 16,
    // backgroundColor: '#121415',
    // backgroundColor: '#18778f',
    backgroundColor: '#219fc9',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
