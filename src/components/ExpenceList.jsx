import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontFamily} from '../config/fonts';
import {getTimeAgo} from '../utils/timeAgo';
import {useNavigation} from '@react-navigation/native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch} from 'react-redux';
import {deleteTransaction} from '../redux/transactionSlice';

const ExpenceList = ({latestTransactions}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleEdit = item => {
    navigation.navigate('Edit Transaction', {transaction: item});
  };

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

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

      <SwipeListView
        data={latestTransactions}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={({item}) => (
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
            {/* Left swipe - EDIT */}
            <TouchableOpacity
              style={[styles.backBtn, styles.leftBtn]}
              onPress={() => handleEdit(item)}>
              <AntDesign name="edit" size={20} color="#fff" />
            </TouchableOpacity>

            {/* Right swipe - DELETE */}
            <TouchableOpacity
              style={[styles.backBtn, styles.rightBtn]}
              onPress={() => handleDelete(item.date)}>
              <MaterialCommunityIcons name="trash-can" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
        leftOpenValue={75} // swipe right to open edit
        rightOpenValue={-75} // swipe left to open delete
        stopLeftSwipe={75}
        stopRightSwipe={-75}
        disableRightSwipe={false}
        disableLeftSwipe={false}
      />
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
    backgroundColor: '#b9d9ae',
  },
  btnTxt: {
    fontSize: 14,
    fontFamily: fontFamily[500],
    color: '#fff',
  },
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
  rowBack: {
    alignItems: 'center',
    height: 63,
    backgroundColor: '#b9d9ae',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
    borderRadius: 15,
  },
  backBtn: {
    width: 70,
    height: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  leftBtn: {
    backgroundColor: '#ffc107',
  },
  rightBtn: {
    backgroundColor: '#f44336',
  },
});

export default ExpenceList;
