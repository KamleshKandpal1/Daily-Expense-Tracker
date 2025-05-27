import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const Pagination = ({currPage, setCurrPage, totalPage}) => {
  const handlePrev = () => {
    if (currPage > 1) setCurrPage(currPage - 1);
  };

  const handleNext = () => {
    if (currPage < totalPage) setCurrPage(currPage + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          currPage === 1 && styles.disabledButton,
        ]}
        onPress={handlePrev}
        disabled={currPage === 1}>
        <Entypo name="chevron-left" size={24} color={currPage === 1 ? '#bbb' : '#333'} />
      </TouchableOpacity>

      <Text style={styles.pageText}>
        {currPage} / {totalPage}
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          currPage === totalPage && styles.disabledButton,
        ]}
        onPress={handleNext}
        disabled={currPage === totalPage}>
        <Entypo name="chevron-right" size={24} color={currPage === totalPage ? '#bbb' : '#333'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 3,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
  },
  pageText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
  },
});

export default Pagination;
