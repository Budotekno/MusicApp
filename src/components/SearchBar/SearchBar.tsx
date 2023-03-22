/* eslint-disable prettier/prettier */
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./Search.styles";

const SearchBar = (props:any) =>
{


    return(

        <View style={styles.container}>
        <TextInput style={styles.txtSearch}
        placeholder="Ara..."
        onChangeText={props.findTxt}
        />
        </View>

  
        
    );
};

export default SearchBar;