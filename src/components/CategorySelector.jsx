import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamily} from '../config/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../redux/transactionSlice';

const categories = [
  {label: 'Food', value: 'food', icon: 'silverware-fork-knife'},
  {label: 'Groceries', value: 'groceries', icon: 'cart'},
  {label: 'Shopping', value: 'shopping', icon: 'shopping'},
  {label: 'Transport', value: 'transport', icon: 'bus'},
  {label: 'Bills', value: 'bills', icon: 'file-document'},
];

const CategorySelector = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.transaction.category);

  return (
    <View style={{marginVertical: 15}}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.value}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          const isSelected = selectedCategory === item.value;
          return (
            <TouchableOpacity
              style={[
                styles.categoryBox,
                isSelected && styles.selectedCategory,
              ]}
              onPress={() =>
                dispatch(setCategory({label: item.value, icon: item.icon}))
              }>
              <Icon
                name={item.icon}
                size={24}
                color={isSelected ? '#fff' : '#333'}
              />
              <Text
                style={[styles.label, {color: isSelected ? '#fff' : '#333'}]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#b7daac',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
  },
  categoryBox: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  selectedCategory: {
    backgroundColor: '#4caf50',
  },
  label: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: fontFamily[500],
    textAlign: 'center',
  },
});

export default CategorySelector;
