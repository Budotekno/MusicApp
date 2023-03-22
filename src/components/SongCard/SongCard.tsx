/* eslint-disable prettier/prettier */
import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./SongCard.styles";

const SongCard = (props:any) =>
{
    return(

        <View>
            
            <View style={styles.container}>

                <Image style={styles.image} source={{uri : props.data.imageUrl}}/>

                <View style={styles.inner_container}>

                    <Text style={styles.title}>{props.data.title}</Text>

                        <View style={styles.content_container}>
                            <View style={styles.info_container}>
                                <Text>{props.data.artist}</Text>
                                <Text style={styles.year}>{props.data.year}</Text>
                            </View>

                            {
                                props.data.isSoldOut == true ? (
                                <View style={styles.soldout_container} >
                                    <Text style={styles.soldount_text}>Tükendi</Text>
                                </View>)
                                : null
                            }
                        </View>
                </View>

               

            </View>

            <View style={styles.line} >
                    <Text></Text>
                </View>

        </View>
       
        
    );
};

export default SongCard;