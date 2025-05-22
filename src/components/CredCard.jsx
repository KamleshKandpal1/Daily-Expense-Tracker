import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontFamily} from '../config/fonts';

const CredCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingTitle}>Your Cards</Text>
      <View>
        <View style={styles.cardInfoBox}>
          <View style={styles.cardDetails}>
            <View style={styles.cardBox}>
              <Text style={styles.cardNumber}>.... 5434</Text>
            </View>
            <View style={styles.cardAbout}>
              <Text style={styles.cardAmount}>$10000</Text>
              <Text style={styles.cardType}>Visa</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-right-circle"
              color="#000"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.cardInfoBox}>
          <View style={styles.cardDetails}>
            <View style={styles.cardBox}>
              <Text style={styles.cardNumber}>.... 5434</Text>
            </View>
            <View style={styles.cardAbout}>
              <Text style={styles.cardAmount}>$10000</Text>
              <Text style={styles.cardType}>Visa</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="chevron-right-circle"
              color="#000"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
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
  cardInfoBox: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: '#b9d9ae',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    // height: 60,
  },

  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 10,
  },
  cardBox: {
    backgroundColor: '#030303',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  cardNumber: {color: '#f1f1f1', fontFamily: fontFamily[100], fontSize: 13},
  cardAbout: {gap: 3},
  cardAmount: {
    color: '#030303',
    fontFamily: fontFamily[600],
    fontSize: 15,
    letterSpacing: 1,
  },
  cardType: {
    color: '#0606',
    fontFamily: fontFamily[100],
    fontSize: 13,
    letterSpacing: 1,
  },
});
export default CredCard;
