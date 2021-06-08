import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = () => {

  return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../assets/logo.png')} style={{height:50,width:200}} />
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  title: {
    fontFamily: 'SofiaProBold',
    color: 'white',
    fontSize: 20
  },
  cartCount: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 12,
    marginTop: -30,
    marginLeft: 18,
    borderRadius: 10,
  },
  amount: {
    color: 'white',
    // backgroundColor: Colors.skyBlue,
    textAlign: 'center',
    fontSize: 10,
    // marginTop: -30,
    // marginLeft: 18,
    borderRadius: 10,
  },
  walletContainer: {
    flex: 1,
    backgroundColor: 'grey'
  },
  separator: {
    marginHorizontal: 10
  },
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  totalBalance: {
    fontFamily: 'SofiaProRegular',
    color: 'grey',
    fontSize: 16
  },
  totalAmount: {
    fontFamily: 'SofiaProBold',
    color: 'black',
    fontSize: 18
  },
  addedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10
  },
  addedAmountText: {
    fontFamily: 'SofiaProRegular',
    color: 'grey',
    fontSize: 12
  },
  amount: {
    fontFamily: 'SofiaProBold',
    color: 'grey',
    fontSize: 16
  },
  dateTime: {
    fontFamily: 'SofiaProBold',
    color: 'grey',
    fontSize: 14
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    backgroundColor: 'orange',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10
  },
  historyText: {
    color: 'white',
    textAlign: 'center'
  },
  upIcon: {
    alignSelf: 'center',
    marginVertical: 10
  }
});


export default Header;