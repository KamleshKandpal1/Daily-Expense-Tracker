import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AddBtn = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Transaction')}>
        <MaterialIcons name="add-circle" color="#000" size={40} />
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({});

export default AddBtn;
