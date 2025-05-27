import {View, TextInput, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {editTransaction} from '../redux/transactionSlice';

const EditTransaction = ({route, navigation}) => {
  const {transaction} = route.params;
  const dispatch = useDispatch();

  const [amount, setAmount] = React.useState(transaction.amount);
  const [paymentType, setPaymentType] = React.useState(transaction.paymentType);

  const handleSubmit = () => {
    const updatedData = {
      ...transaction,
      amount: Number(amount),
      paymentType,
    };
    dispatch(editTransaction({id: transaction.id, updatedData}));
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        value={amount.toString()}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput value={paymentType} onChangeText={setPaymentType} />
      <Button title="Save Changes" onPress={handleSubmit} />
    </View>
  );
};

export default EditTransaction;
