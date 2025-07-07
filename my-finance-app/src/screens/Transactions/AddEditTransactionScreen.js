import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddEditTransactionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add/Edit Transaction Screen</Text>
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

export default AddEditTransactionScreen;