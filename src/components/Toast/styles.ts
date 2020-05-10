import {StyleSheet} from 'react-native';
import Layout from 'src/constants/Layout';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  safeAreaContainer: {},
  contentContainer: {
    borderWidth: 1,
    borderColor: 'red',
    padding: Layout.padding / 2,
    marginTop: Layout.margin / 4,
    marginHorizontal: Layout.horizontalMargin / 2,
    borderRadius: Layout.rounded,
    backgroundColor: 'white',
  },
});
