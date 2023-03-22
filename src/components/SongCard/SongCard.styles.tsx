/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container:{
            padding:10,
            flexDirection:'row',
        },
        image:{
            width:100,
            height:100,
            borderRadius:50,
        },
        inner_container:{
            padding:10,
            flex:1,
            justifyContent:'center',
            
        },
        title:{
            fontWeight:'bold',
            fontSize:21,
            color:'black'
        },
        info_container:{
            flexDirection:'row',
            flex:1,
            alignItems:'center'
        },
        year:{
            marginLeft:10,
            color:'gray',
            fontWeight:'bold',
            fontSize:12,
        },
        soldout_container:{
            borderWidth:1,
            borderRadius:5,
            borderColor:'red',
            padding:5,


        },
        soldount_text:{
            color:'red',
            fontSize:12,
            
        },
        content_container:{
            flexDirection:'row'
        },
        line:{
            borderBottomWidth:1,
            borderColor:'#2980b9',
            height:1, 
            opacity:0.5,
        }
    }
);

export default styles;