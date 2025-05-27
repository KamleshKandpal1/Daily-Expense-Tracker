import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Menu, Divider, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import Pagination from '../components/Pagination';
import TransactionList from '../components/TransactionList';

const categories = [
  'All',
  'food',
  'groceries',
  'shopping',
  'transport',
  'bills',
];
const paymentTypes = ['All', 'cash', 'card', 'upi'];

const TransactionLists = () => {
  const transactions =
    useSelector(state => state.transaction.transactions) || [];

  const [amountOrder, setAmountOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPayment, setSelectedPayment] = useState('All');

  const [categoryMenuVisible, setCategoryMenuVisible] = useState(false);
  const [paymentMenuVisible, setPaymentMenuVisible] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const itemPerPage = 8;

  useEffect(() => {
    let data = [...transactions];

    if (selectedCategory !== 'All') {
      data = data.filter(t => t.category === selectedCategory);
    }

    if (selectedPayment !== 'All') {
      data = data.filter(t => t.paymentType === selectedPayment);
    }

    if (amountOrder === 'asc') data.sort((a, b) => a.amount - b.amount);
    else if (amountOrder === 'desc') data.sort((a, b) => b.amount - a.amount);

    setFilteredData(data);
    setCurrPage(1);
  }, [transactions, selectedCategory, selectedPayment, amountOrder]);

  useEffect(() => {
    const start = (currPage - 1) * itemPerPage;
    const end = start + itemPerPage;
    setPaginatedData(filteredData.slice(start, end));
  }, [currPage, filteredData]);

  const cycleAmountOrder = () => {
    if (amountOrder === 'asc') setAmountOrder('desc');
    else setAmountOrder('asc');
  };

  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.filterBar}>
          <TouchableOpacity style={styles.filterBtn} onPress={cycleAmountOrder}>
            <Icon name="filter" size={16} color="#555" />
            <Text style={styles.filterText}>
              Amount: {amountOrder.slice(0, 3)}
            </Text>
          </TouchableOpacity>

          <Menu
            visible={categoryMenuVisible}
            onDismiss={() => setCategoryMenuVisible(false)}
            anchor={
              <TouchableOpacity
                onPress={() => setCategoryMenuVisible(true)}
                style={styles.filterBtn}>
                <Text style={styles.filterText}>
                  Category: {selectedCategory.slice(0, 3)}
                </Text>
              </TouchableOpacity>
            }>
            {categories.map(cat => (
              <Menu.Item
                key={cat}
                title={cat}
                style={{textTransform: 'capitalize'}}
                onPress={() => {
                  setSelectedCategory(cat);
                  setCategoryMenuVisible(false);
                }}
              />
            ))}
          </Menu>

          <Menu
            visible={paymentMenuVisible}
            onDismiss={() => setPaymentMenuVisible(false)}
            anchor={
              <TouchableOpacity
                onPress={() => setPaymentMenuVisible(true)}
                style={styles.filterBtn}>
                <Text style={styles.filterText}>
                  Payment: {selectedPayment.slice(0, 3)}
                </Text>
              </TouchableOpacity>
            }>
            {paymentTypes.map(pay => (
              <Menu.Item
                key={pay}
                title={pay}
                onPress={() => {
                  setSelectedPayment(pay);
                  setPaymentMenuVisible(false);
                }}
              />
            ))}
          </Menu>
        </View>

        <TransactionList data={paginatedData} />

        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          totalPage={Math.ceil(filteredData.length / itemPerPage)}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  filterBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#d4e9d9',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textTransform: 'capitalize',
  },
});

export default TransactionLists;
