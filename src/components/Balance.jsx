import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {fontFamily} from '../config/fonts';
import {useSelector} from 'react-redux';

const Balance = () => {
  const {income, spent} = useSelector(state => state.balance);
  const currBal = income - spent;

  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Current Balance</Text>
      <Text style={styles.currBalTxt}>
        {currBal.toLocaleString('en-IN', {style: 'currency', currency: 'INR'})}
      </Text>
      <View style={styles.expencesInfoBox}>
        <View style={styles.incomeSide}>
          <Text style={styles.incomeSideTxt}>Income</Text>
          <Text style={styles.incomeSideAmount}>
            {income.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}
          </Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.spentSide}>
          <Text style={styles.spentSideTxt}>Spent</Text>
          <Text style={styles.spentSideAmount}>
            {spent.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#b9d9ae',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  headingTitle: {
    fontSize: 17,
    fontFamily: fontFamily[400],
    marginBottom: 5,
    letterSpacing: 1,
  },
  currBalTxt: {
    fontSize: 40,
    fontFamily: fontFamily[600],
    letterSpacing: 3,
    color: '#030303',
  },
  expencesInfoBox: {
    borderRadius: 15,
    backgroundColor: '#1317de',
    paddingHorizontal: 30,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    height: 100,
  },
  incomeSide: {
    gap: 5,
  },
  incomeSideTxt: {
    color: '#f1f1f1',
    fontSize: 12,
    fontFamily: fontFamily[100],
  },
  incomeSideAmount: {
    fontSize: 20,
    color: '#f1f1f1',
    fontFamily: fontFamily[200],
    letterSpacing: 1,
    // color: '#030303',
  },
  spentSide: {
    gap: 5,
  },
  spentSideTxt: {
    color: '#f1f1f1',
    fontSize: 12,
    fontFamily: fontFamily[100],
  },
  spentSideAmount: {
    fontSize: 20,
    color: '#f1f1f1',
    fontFamily: fontFamily[200],
    letterSpacing: 1,
    // color: '#030303',
  },
  line: {
    width: 1,
    height: 30,
    marginTop: 10,
    backgroundColor: '#f1f1f1',
  },
});
export default Balance;
