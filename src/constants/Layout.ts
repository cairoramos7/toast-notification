import {Dimensions} from 'react-native';

const windowDimensions = Dimensions.get('window');

const padding = 15 * windowDimensions.scale;

const margin = 15 * windowDimensions.scale;

export default {
  width: windowDimensions.width,
  height: windowDimensions.height,
  padding,
  horizontalPadding: padding,
  verticalPadding: padding,
  margin,
  horizontalMargin: margin,
  verticalMargin: margin,
  radius: 3,
  rounded: 6,
};
