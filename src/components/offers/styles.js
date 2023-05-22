import {StyleSheet, Dimensions} from 'react-native';
import {Regular} from '../../../Assets/FontFamily/FontConst';
import FontSize from '../../../Assets/Themes/FontSize';
import Responsive from '../../../Assets/Themes/Responsive';
import theme from '../../../Components/themes';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  slide: {
    height: Responsive.heightPercentageToDP('60%'),
  },
  titleContainer: {
    height: height * 0.1,
    width: width * 0.9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: height / 65,
  },
  title: {
    color: '#000000',
    fontSize: height / 35,
    fontFamily: Regular,
  },
  imgContainer: {
    height: Responsive.heightPercentageToDP('30%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: height / 2.3,
    width: width / 1.15,
    marginTop: height * 0.01,
  },
  txtContainer: {
    height: Responsive.heightPercentageToDP('20%'),
    width: Responsive.widthPercentageToDP('100%'),
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  titleView: {
    color: theme.colors.black[100],
    fontSize: FontSize.size.h22,
    fontWeight: '600',
    textAlign: 'center',
  },
  firstTxtContainer: {
    height: Responsive.heightPercentageToDP('8%'),
    justifyContent: 'center',
  },
  txtView: {
    color: theme.colors.grey[100],
    fontSize: FontSize.size.h15,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
    // fontFamily:PoppinsRegular,
  },
  buttonCircle: {
    height: 51,
    paddingHorizontal: 131,
    backgroundColor: theme.colors.pink[100],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  skip: {
    height: height / 20,
    width: width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skip_Main_View: {
    right: 50,
    height: Responsive.heightPercentageToDP('20%'),
    justifyContent: 'center',
  },
  SkipView: {
    color: '#000000',
    fontSize: FontSize.size.h18,
    fontWeight: '500',
    top: 10,
    textDecorationLine: 'underline',
  },
  Done: {
    height: height / 7,
    width: width / 2.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    top: -height / 19,
    right: width / 4,
  },
  login: {
    height: height / 17,
    width: width / 2.5,
    backgroundColor: '#F36523',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    top: -height / 7.5,
    right: width / 2,
  },
});

export default styles;
