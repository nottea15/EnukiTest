import {scale, verticalScale} from '@utils/scaleFunction';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: scale(10),
    marginTop: verticalScale(10),
  },
  input: {
    backgroundColor: '#FFF',
    height: 30,
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(16),
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
