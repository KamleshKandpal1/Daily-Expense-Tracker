import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {setAmount} from '../redux/transactionSlice';
import {fontFamily} from '../config/fonts'; // make sure this is defined correctly

const AmountInput = () => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => state.transaction.amount);

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.inputText}
        value={amount}
        onChangeText={(text) => dispatch(setAmount(text))}
        placeholder="Add Amount"
        returnKeyLabel="Done"
        blurOnSubmit={false}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#b7daac',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    fontFamily: fontFamily[300],
    color: '#a8acad',
  },
  inputText: {
    fontSize: 22,
    color: '#030303',
    fontFamily: fontFamily[300],
  },
});

export default AmountInput;
