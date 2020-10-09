import React, {useState} from 'react';
import {SafeAreaView, FlatList, View, ActivityIndicator} from 'react-native';
import SearchBar from '../../components/SearchBar/search-bar';
import Button from '../../components/Button/button';
import SearchItems from '../../components/SearchItems/search-items';
import debounce from 'lodash.debounce';
import styles from './styles';
import {searchFoPhotos} from '../../services/services';
import { COLORS } from '../../utils/constants';
import {inject, observer} from 'mobx-react';
import HeaderWaves from '../../components/Header/header';

const MainScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [searchDataIsLoading, setSearchDataLoader] = useState(false);

  const searchFilterFunction = (text: string) => {
    setSearchText(text);
  };

  const universalSearch = async (text: string) => {
    const searchResponse = await searchFoPhotos(text);
    searchResponse.stat === 'ok' && setSearchDataLoader(false);
    setSearchData(searchResponse)
  };

  const universalSearchDebounce = debounce(universalSearch, 750);

  const newArrayOfPhotos = () => {
    const newArray = searchData.photos.photo.map((data) => {
        return {
          id: data.id, 
          uri:`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`, 
          title: data.title
        }
    })

    return newArray;
  };
  const clearSearch = () => {
    setSearchText(' ')
    setSearchData([])
  }
  return (
    <SafeAreaView>
      <SearchBar 
        searchText={searchText} 
        searchFilterFunction={searchFilterFunction} 
        placeholder="Search for an awesome photo"
        autoFocus={false}
        clearSearch={clearSearch}
      />
      <View style={styles.btnContainer}>
      <Button 
        title='Search'
        style={styles.btnStyle}
        onPress={() => universalSearchDebounce(searchText)}
        color={COLORS.whiteBg}
      />
      </View>
      <View style={styles.imageListContainer}>
      { 
        searchData && searchData.photos &&
          <FlatList 
            data={searchData.photos.photo} 
            renderItem={({item, index}) => (
              <SearchItems 
                data={item} 
                idx={index} 
                imagesLength={searchData.photos.photo.length} 
                allItems={newArrayOfPhotos()} 
              />
            )}
            keyExtractor={(item, index) => `list-item-${index}`}
            numColumns={3}
          /> 
        }
        { searchDataIsLoading && <ActivityIndicator size="large" color="red" /> }
        </View>
    </SafeAreaView>
  );
};

export default (observer(MainScreen));

