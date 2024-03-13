import {useEffect, useState} from 'react';
import {Dimensions, useWindowDimensions} from 'react-native';


export const useOrientation = () => {
    const SCREEN_WIDTH = useWindowDimensions().width;
    const SCREEN_HEIGHT = useWindowDimensions().height;
  const [orientation, setOrientation] = useState(
    SCREEN_WIDTH < SCREEN_HEIGHT ? 'PORTRAIT' : 'LANDSCAPE',
  );

  useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setOrientation('PORTRAIT');
      } else {
        setOrientation('LANDSCAPE');
      }
    });
  }, []);

  return orientation;
};
