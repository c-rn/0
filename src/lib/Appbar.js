

import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import {
   StyleSheet,
   View, ScrollView,
   Text 
} from "react-native";


export default function AppBar() {
   const styles = StyleSheet.create(
      {
         appbar: {
            width: "100%",
            height: 81,
            backgroundColor: "#16181c",
            boxShadow: "#922 0px 0px 50px",
            zIndex: 9,
            elevation: 5,
         },
         home: {
            height: "100%",
            flexDirection: "row",
         },
         options: {
            flex: .1,
            alignItems: "center",
            justifyContent: "center",
         },
         central: {
            flex: .8,
            alignItems: "center",
            justifyContent: "center",
         },
         title: {
            fontSize: 32,
            fontWeight: "bold",
            color: "#fc0fc0",
            margin: "auto",
         },
         appbar_icon: {
            color: "white",
            fontSize: 35,
            fontWeight: "bold",
         },
      }
   );

   const 
      [ nome, setNome ] = useState( "Noely Gangello" )
   ;

   return( <>
      <View style={ styles.appbar }>
         <View style={ styles.home }>
            <View style={ styles.options }>
               <Icon name="ellipsis-vertical-sharp" style={ styles.appbar_icon } />
            </View>
            <View style={ styles.central }>
               <Text style={ styles.title }>{ nome }</Text>
            </View>
            <View style={ styles.options }></View>
         </View>
      </View>
   </> );
}