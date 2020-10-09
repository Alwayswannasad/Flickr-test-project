import React from 'react';
import {View, TextStyle, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets/icons';
import { COLORS } from '../../utils/constants';


interface SearchProps {
  placeHolder: string;
  searchStyle: TextStyle;
  autoFocus: boolean;
  searchFilterFunction: (text: string) => void;
  iconPosition?: TextStyle;
  clearSearch?: () => void;
  searchText: string;
}

const SearchBar = ({
  placeHolder,
  autoFocus,
  searchFilterFunction,
  clearSearch,
  searchText,
}: SearchProps) => {
  const {simpleTextColor} = COLORS;
  const {search, clearSearch: clearIcon} = Icons;
  let isEmpty = searchText.length === 0;
  let emptyBlock = (
    <View style={styles.iconPosition}>
      <Image source={search} style={styles.searchIcon} />
    </View>
  );
  let fillBlock = (
    <View style={styles.iconPosition}>
      <TouchableOpacity onPress={clearSearch}>
        <Image source={clearIcon} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
  let iconBlock = isEmpty ? emptyBlock : fillBlock;
  return (
    <View style={styles.searchBarContainer}>
      <View>
        {iconBlock}
        <TextInput
          style={styles.searchStyle}
          placeholder={placeHolder}
          placeholderTextColor={simpleTextColor}
          autoCorrect={false}
          autoFocus={autoFocus}
          onChangeText={searchFilterFunction}
          value={searchText}
        />
      </View>
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
    searchBarContainer: {
      height: 48,
    },
    searchIcon: {
      width: 16,
      height: 16,
    },
    iconPosition: {
        position: 'absolute',
        zIndex: 2,
        right: 10,
        top: 15,
    },
    searchStyle: {
        backgroundColor: COLORS.mainBackground,
        height: '100%',
        color: COLORS.simpleTextColor,
        paddingHorizontal: 10,
    },
  });
  