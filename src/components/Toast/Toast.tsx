import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import styles from './styles';

const Toast = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.contentContainer}>
          <Text>Toast Notification is here</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

Toast.propTypes = {};

Toast.defaultProps = {};

export default Toast;
