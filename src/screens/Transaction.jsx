import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {fontFamily} from '../config/fonts';

import CategorySelector from '../components/CategorySelector.jsx';
import PaymentOptions from '../components/PaymentOptions.jsx';
import {addTransaction, resetTransaction} from '../redux/transactionSlice';
import {addIncome, addSpent} from '../redux/balanceSlice.js';

const Transaction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {category, paymentType, icon} = useSelector(state => state.transaction);
  const [showErrors, setShowErrors] = useState(false);

  const initialValues = {
    amount: '',
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.number()
      .required('Amount is required')
      .typeError('Amount must be a number'),
  });

  const handleSubmit = values => {
    setShowErrors(true);
    if (!category || !paymentType) return;

    const transaction = {
      amount: Number(values.amount),
      id: Date.now().toString(),
      date: new Date().toISOString(),
      category,
      paymentType,
      icon,
    };

    dispatch(addTransaction(transaction));

    category === 'Income'
      ? dispatch(addIncome(transaction.amount))
      : dispatch(addSpent(transaction.amount));

    dispatch(resetTransaction());
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          resetForm,
          isValid,
        }) => (
          <>
            {/* Amount Input */}
            <Text style={styles.heading}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="₹ Enter amount"
              keyboardType="numeric"
              value={values.amount}
              onChangeText={handleChange('amount')}
            />
            {touched.amount && errors.amount && (
              <Text style={styles.errorText}>{errors.amount}</Text>
            )}

            {/* Category Selector */}
            <Text style={styles.heading}>Category</Text>
            <CategorySelector />
            {showErrors && !category && (
              <Text style={styles.errorText}>Please select a category</Text>
            )}

            {/* Payment Options */}
            <Text style={styles.heading}>Payment Type</Text>
            <PaymentOptions />

            {showErrors && !paymentType && (
              <Text style={styles.errorText}>Please select a payment type</Text>
            )}

            {/* Add Button */}
            <View style={styles.btns}>
              <TouchableOpacity
                style={[styles.resetBtn, styles.Btn]}
                onPress={() => {
                  dispatch(resetTransaction());
                  resetForm();
                  setShowErrors(false);
                }}>
                <View>
                  <Text style={[styles.resetText, styles.text]}>Reset</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.addBtn,
                  styles.Btn,
                  (!isValid || !category || !paymentType) && {opacity: 0.5},
                ]}
                onPress={handleSubmit}
                disabled={!isValid || !category || !paymentType}>
                <View style={[styles.addContent]}>
                  <FontAwesome name="rupee" color="#fff" size={20} />
                  <Text style={[styles.addText, styles.text]}>Add</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8fa',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontFamily: fontFamily[500],
    color: '#a8acad',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    backgroundColor: '#e0f2e9',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: fontFamily[300],
    color: '#030303',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 14,
  },
  btns: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  Btn: {
    borderRadius: 12,
    paddingVertical: 14,
    // paddingHorizontal: 20,
    alignItems: 'center',
    width: '40%',
  },

  addBtn: {
    backgroundColor: '#4caf50',
  },
  resetBtn: {
    backgroundColor: '#a8acad',
  },
  addContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: fontFamily[500],
  },
  resetText: {
    color: '#030303',
  },
  addText: {
    color: '#fff',
  },
});

export default Transaction;
