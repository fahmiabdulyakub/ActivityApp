import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '@themes';
import {History, Home} from '@screens';
import {StackParams} from '@types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {navigationRef} from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator<StackParams>();

export const Routes = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.white,
  },
});
