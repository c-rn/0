

import React, { useState } from "react";
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
            boxShadow: "#0005 0px 0px 10px",
            zIndex: 9,
         },
         home: {
            height: "100%",
            flexDirection: "row",
         },
         options: {
            flex: .1,
            // height: "100%",
            // aspectRatio: 1,
         },
         central: {
            // flex: 1,
            flex: .8,
            alignContent: "center",
            justifyContent: "center",
         },
         title: {
            fontSize: 32,
            fontWeight: 600,
            color: "#fc0fc0",
            margin: "auto",
         },
      }
   );

   const 
      [ nome, setNome ] = useState( "Noely Gangello" )
   ;

   return( <>
      <View style={ styles.appbar }>
         <View style={ styles.home }>
            <View style={ styles.options }></View>
            <View style={ styles.central }>
               <Text style={ styles.title }>{ nome }</Text>
            </View>
            <View style={ styles.options }></View>
         </View>
      </View>
   </> );
}