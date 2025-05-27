// components/TransactionList.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SwipeListView} from 'react-native-swipe-list-view';
import {getTimeAgo} from '../utils/timeAgo';
import {useDispatch} from 'react-redux';
import {deleteTransaction} from '../redux/transactionSlice';
import {subtractIncome, subtractSpent} from '../redux/balanceSlice';

const TransactionList = ({data, isLoading}) => {
  const dispatch = useDispatch();

  const handleDelete = item => {
    dispatch(deleteTransaction(item.id));
    if (item.category === 'Income') {
      dispatch(subtractIncome(item.amount));
    } else {
      dispatch(subtractSpent(item.amount));
    }
  };

  //   if (isLoading) {
  //     return (
  //       <View style={styles.center}>
  //         <ActivityIndicator size="large" color="#4CAF50" />
  //         <Text style={styles.loadingText}>Loading Transactions...</Text>
  //       </View>
  //     );
  //   }

  if (!data || data.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No transactions available.</Text>
      </View>
    );
  }

  return (
    <SwipeListView
      data={data}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
      renderItem={({item}) => (
        <View style={styles.cardInfoBox}>
          <View style={styles.cardDetails}>
            <View style={styles.cardBox}>
              <MaterialCommunityIcons name={item.icon} color="#fff" size={24} />
            </View>
            <View>
              <Text style={styles.cardAmount}>{item.paymentType}</Text>
              <Text style={styles.cardType}>{getTimeAgo(item.date)}</Text>
            </View>
          </View>
          <Text style={styles.amount}>
            {Number(item.amount).toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}
          </Text>
        </View>
      )}
      renderHiddenItem={({item}) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backBtn, styles.rightBtn]}
            onPress={() => handleDelete(item)}>
            <MaterialCommunityIcons name="trash-can" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      stopRightSwipe={-75}
      disableRightSwipe={true}
    />
  );
};

const styles = StyleSheet.create({
  cardInfoBox: {
    borderRadius: 15,
    backgroundColor: '#b9d9ae',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 10,
  },
  cardBox: {
    backgroundColor: '#030303',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardAmount: {
    color: '#030303',
    fontSize: 18,
    fontFamily: 'YourFont-Medium',
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
  cardType: {
    color: '#a8acad',
    fontSize: 12,
    fontFamily: 'YourFont-Regular',
    letterSpacing: 1,
  },
  amount: {
    fontSize: 16,
    fontFamily: 'YourFont-Bold',
  },
  rowBack: {
    //   height: 100,
    alignItems: 'center',
    backgroundColor: '#b9d9ae',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 7,
    borderRadius: 15,
  },
  backBtn: {
    width: 70,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 1,
    overflow: 'hidden',
  },
  rightBtn: {
    backgroundColor: '#f44336',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'YourFont-Regular',
    color: '#666',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'YourFont-Regular',
    color: '#999',
  },
});

export default TransactionList;
