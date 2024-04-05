import {View, Text} from 'react-native';
import React from 'react';
import useHome from './hooks/useHome';
import styles from './styles';
import {Button} from '@components/atoms';
import {ChangeTypeBottomSheet} from '@components/molecules';

const Home = () => {
  const {
    suggestedActivity,
    changeTypeBSRef,
    handleChangeType,
    onPressType,
    handleActivity,
  } = useHome();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What I can do when I am bored ?</Text>
      <Text style={styles.activity}>{suggestedActivity?.activity}</Text>
      <Button
        title={'Type: ' + suggestedActivity?.type}
        style={styles.typeButton}
        textStyle={styles.textType}
        onPress={onPressType}
      />
      <Button title="Another Activity" onPress={handleActivity} />
      <Button title="Suggestion History" style={styles.greenButton} />
      <ChangeTypeBottomSheet ref={changeTypeBSRef} onPress={handleChangeType} />
    </View>
  );
};

export default Home;
