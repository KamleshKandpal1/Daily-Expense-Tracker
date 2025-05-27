import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setPaymentType} from '../redux/transactionSlice';

const paymentOptions = [
  {
    label: 'Cash',
    value: 'cash',
    icon: 'cash',
  },
  {
    label: 'Credit/Debit Card',
    value: 'card',
    icon: 'credit-card-outline',
  },
  {
    label: 'UPI',
    value: 'upi',
    icon: 'qrcode',
  },
];

const PaymentOptions = () => {
  const dispatch = useDispatch();
  const selectedPaymentOption = useSelector(
    state => state.transaction.paymentType,
  );
  return (
    <View style={styles.container}>
      {paymentOptions.map(option => {
        const isSelected = selectedPaymentOption === option.value;
        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.optionBox, isSelected && styles.optionBoxSelected]}
            onPress={() => dispatch(setPaymentType(option.value))}>
            <View style={styles.row}>
              <Icon
                name={option.icon}
                size={30}
                color={isSelected ? '#4caf50' : '#666'}
                style={{marginRight: 10}}
              />
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}>
                {option.label}
              </Text>
            </View>
            <RadioButton
              value={option.value}
              status={isSelected ? 'checked' : 'unchecked'}
              onPress={() => dispatch(setPaymentType(option.value))}
              color="#4caf50"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  optionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
  },
  optionBoxSelected: {
    borderColor: '#4caf50',
    backgroundColor: '#eafbea',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  optionTextSelected: {
    color: '#4caf50',
    fontWeight: '600',
  },
});

export default PaymentOptions;
