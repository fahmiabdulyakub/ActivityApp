import {Colors} from '@themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  handleContainer: {
    height: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    paddingTop: 16,
  },
  handle: {
    height: 5,
    width: 100,
    borderRadius: 16,
    backgroundColor: Colors.light_grey,
  },
});

export default styles;
