import {View, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Balance from '../components/Balance';
import CredCard from '../components/CredCard';
import ExpenceList from '../components/ExpenceList';
import AddBtn from '../components/AddBtn';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const transactions = useSelector(state => state.transaction.transactions);
  const latestTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Balance />
        <CredCard />
        <ExpenceList latestTransactions={latestTransactions} />
        <View style={styles.btn}>
          <AddBtn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#f8f8fa',
    paddingVertical: 10,
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    top: 30,
    right: 40,
  },
});

export default HomeScreen;
