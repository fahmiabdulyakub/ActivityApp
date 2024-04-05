import {Colors, Fonts} from '@themes';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  text: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 16,
    color: Colors.black,
  },
  title: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 18,
    color: Colors.black,
    fontWeight: 'bold',
  },
  titleContainer: {
    padding: 8,
  },
});

export default styles;
