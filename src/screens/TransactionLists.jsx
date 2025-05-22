import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {getTimeAgo} from '../utils/timeAgo';
import {fontFamily} from '../config/fonts';

const TransactionLists = () => {
  const transactions =
    useSelector(state => state.transaction.transactions) || [];
  return (
    <ScrollView style={styles.container}>
      {transactions.map(item => (
        <TouchableOpacity key={item.date}>
          <View style={styles.cardInfoBox}>
            <View style={styles.cardDetails}>
              <View style={styles.cardBox}>
                <MaterialCommunityIcons
                  name={item.icon}
                  color="#fff"
                  size={24}
                />
              </View>
              <View>
                <Text style={styles.cardAmount}>{item.paymentType}</Text>
                <Text style={styles.cardType}>{getTimeAgo(item.date)}</Text>
                {/* <Text style={styles.cardAmount}>{item.category}</Text> */}
              </View>
            </View>
            <Text style={styles.amount}>
              {Number(item.amount).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              })}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: '100%',
  },
  cardInfoBox: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#b9d9ae',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    // height: 60,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 20,
  },
  cardBox: {
    backgroundColor: '#030303',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardAmount: {
    color: '#030303',
    fontFamily: fontFamily[600],
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  cardType: {
    color: '#a8acad',
    fontFamily: fontFamily[400],
    fontSize: 12,
    letterSpacing: 1,
  },
  amount: {
    fontSize: 16,
    fontFamily: fontFamily[600],
  },
});
export default TransactionLists;
