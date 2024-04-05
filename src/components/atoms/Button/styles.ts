import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '@themes';
import {hp, wp} from '@utils/StyleUtil';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: hp(1),
    paddingHorizontal: wp(6),
    borderWidth: 1,
    borderColor: Colors.light_grey,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    backgroundColor: Colors.blue,
    marginBottom: 16,
  },
  title: {
    fontSize: hp(1.8),
    color: Colors.white,
    fontFamily: Fonts.PoppinsMedium,
    top: 1,
  },
});
