import {Colors, Fonts} from '@themes';
import {hp, wp} from '@utils/StyleUtil';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: hp(3),
    paddingHorizontal: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: Fonts.PoppinsMedium,
    textAlign: 'center',
    marginBottom: 16,
  },
  activity: {
    fontSize: 18,
    color: Colors.black,
    fontFamily: Fonts.PoppinsRegion,
    textAlign: 'center',
  },
  type: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: Fonts.PoppinsRegion,
    textAlign: 'center',
    marginBottom: 16,
  },
  greenButton: {
    backgroundColor: Colors.green,
  },
  typeButton: {
    borderWidth: 1,
    borderColor: Colors.blue,
    backgroundColor: Colors.white,
  },
  textType: {
    color: Colors.blue,
  },
});

export default styles;
