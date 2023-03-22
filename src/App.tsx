/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import musicData from "./music-data.json";
import SongCard from "./components/SongCard/SongCard";
import SearchBar from "./components/SearchBar/SearchBar";
import styles from "./App.styles";
import Banner from "./components/Banner/Banner";

const App = () =>
{

    const [list, setList] = useState(musicData);
    const renderSong = ({item}:any) => <SongCard data={item}/>

    const onSearch = (text:any)=>
    {
        const filterList = musicData.filter(song =>{
            const searchText = text.toLowerCase();
            const curnnetTitle = song.title.toLowerCase();

            return curnnetTitle.indexOf(searchText) > -1;
        });

        setList(filterList);
        
    }
    
    return(
        <View style={styles.container}>

            <Banner/>
            
            <SearchBar findTxt={onSearch}/>

            {
                list.length==0 &&
                (
                    <View style={styles.NotListContainer}>
                        <Text style={styles.NotListText}>
                            Aradınığınız müzik bulunamadı! 
                        </Text>
                    </View>
                )
            }
            <FlatList 
                data={list} 
                renderItem={renderSong}
            />

        </View>
    );
};


export default App;