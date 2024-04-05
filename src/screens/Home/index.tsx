import {View, Text} from 'react-native';
import React from 'react';
import useHome from './hooks/useHome';
import styles from './styles';
import {Button} from '@components/atoms';

const Home = () => {
  const {suggestedActivity, fetchActivity} = useHome();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What I can do when I am bored ?</Text>
      <Text style={styles.activity}>{suggestedActivity?.activity}</Text>
      <Text style={styles.type}>Type: {suggestedActivity?.type}</Text>
      <Button
        title={'Type: ' + suggestedActivity?.type}
        style={styles.typeButton}
        textStyle={styles.textType}
      />
      <Button title="Another Activity" onPress={fetchActivity} />
      <Button title="Suggestion History" style={styles.greenButton} />
    </View>
  );
};

export default Home;
