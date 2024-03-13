import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {styles} from './ItemDetailsScreen.styles';
import {RootStackParamList} from '@navigators/MainNavigator';
import {RouteProp} from '@react-navigation/native';
import {useOrientation} from '../../hooks/useOrientation';

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
};

export const ItemDetailsScreen: React.FC<Props<'ItemDetails'>> = ({route}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const {item} = route.params;
  const orientation = useOrientation();

  return (
    <View
      style={[styles.container, orientation === 'LANDSCAPE' && styles.flexRow]}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `${item.firstPreviewImage.watermarked}`}}
          style={styles.image}
          onLoadEnd={() => setIsImageLoading(false)}
        />
        {isImageLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.author.details.publicName}</Text>
        <Text style={styles.price}>{item.price} €</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};
