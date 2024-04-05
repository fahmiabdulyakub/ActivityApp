import {View} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';

const HandleBottomSheet = () => {
  return (
    <View style={styles.handleContainer}>
      <View style={styles.handle} />
    </View>
  );
};

export default memo(HandleBottomSheet);
