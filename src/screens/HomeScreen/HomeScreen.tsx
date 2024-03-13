import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from './HomeScreen.styles';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {IITem} from '@utils/types/Item';
import Items from '@utils/api/Items';
import {SearchItem} from '@components/SearchItem';

const PAGE_LIMIT = 20;

export const HomeScreen: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<IITem[]>([]);
  const [hasMoreData, setHasMoreData] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await Items.getItems(page, searchValue);
      console.log(response);
      response.data.total / PAGE_LIMIT <= page && setHasMoreData(false);
      if (page === 0) {
        setData(response.data.items.materials);
      } else {
        setData(prev => [...prev, ...response.data.items.materials]);
      }
      // response.
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPage(0);
    setHasMoreData(true);
  };

  const fetchNextPage = () => {
    if (hasMoreData && !isLoading) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (hasMoreData && !isLoading) {
      getData();
    }
  }, [page, searchValue]);

  const ListEndLoader = () => {
    if (isLoading) {
      return <ActivityIndicator size={'large'} />;
    }
  };

  if (page === 0 && isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onSubmitEditing={({nativeEvent: {text}}) => handleSearch(text)}
        editable={!isLoading}
        defaultValue={searchValue}
      />
      <FlatList
        data={data}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.8}
        renderItem={({item}) => <SearchItem item={item} />}
        ListFooterComponent={ListEndLoader}
        keyExtractor={(item, index) => `${item.id + index}`}
      />
    </View>
  );
};
