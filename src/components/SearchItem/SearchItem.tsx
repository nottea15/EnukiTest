import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {styles} from './SearchItem.styles';
import {IITem} from '@utils/types/Item';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@navigators/MainNavigator';

interface IProps {
  item: IITem;
}

export const SearchItem: React.FC<IProps> = ({item}) => {
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const goToDetails = () => {
    navigation.navigate('ItemDetails', {item: item});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <View>
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
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.author.details.publicName}</Text>
      <Text style={styles.price}>{item.price} €</Text>
    </TouchableOpacity>
  );
};
