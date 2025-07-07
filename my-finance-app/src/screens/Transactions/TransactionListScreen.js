import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Transaction List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransactionListScreen;