import {verticalScale} from '@utils/scaleFunction';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: verticalScale(5),
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
});
