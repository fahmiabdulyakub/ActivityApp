import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {IActivity, StackParams} from '@types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const History = ({route}: NativeStackScreenProps<StackParams, 'History'>) => {
  const {data} = route.params;
  const renderItem = ({item}: {item: IActivity}) => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.activity}>{item.activity}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    );
  };

  const keyExtractor = (item: IActivity) => item.key;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default History;
