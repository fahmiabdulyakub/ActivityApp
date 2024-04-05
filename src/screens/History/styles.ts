import {Colors, Fonts} from '@themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    padding: 16,
  },
  activity: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Fonts.PoppinsRegion,
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.PoppinsRegion,
    textTransform: 'capitalize',
  },
});

export default styles;
