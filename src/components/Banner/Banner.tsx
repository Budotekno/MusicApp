/* eslint-disable prettier/prettier */
import React from "react";
import { Text, View } from "react-native";
import styles from "./Banner.styles";

const Banner = ()=>
{
    return(
        <View style={styles.container}>
            <Text style={styles.bannerText}>Budo Music</Text>
        </View>
    );
};

export default Banner;