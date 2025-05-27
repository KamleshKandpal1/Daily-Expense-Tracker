// components/ExpenceList.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TransactionList from './TransactionList';
import {fontFamily} from '../config/fonts';

const ExpenceList = ({latestTransactions}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.headingTitle}>Expenses</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Transaction Lists')}>
          <Text style={styles.btnTxt}>View All</Text>
        </TouchableOpacity>
      </View>

      <TransactionList data={latestTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  headingTitle: {
    fontSize: 17,
    fontFamily: fontFamily[400],
    marginBottom: 5,
    letterSpacing: 1,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    borderWidth: 1,
    borderColor: '#b7daac',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    backgroundColor: '#494949',
  },
  btnTxt: {
    fontSize: 14,
    fontFamily: fontFamily[500],
    color: '#fff',
  },
});

export default ExpenceList;
