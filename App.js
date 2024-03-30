

import React from "react";
import { StatusBar } from "expo-status-bar";
import {
   StyleSheet, 
   View, Text 
} from "react-native";
import AppBar from "./src/lib/Appbar";


export default function App() {
   const styles = StyleSheet.create(
      {
         app: {
            flex: 1,
            backgroundColor: "#f5f5f5",
            alignItems: "center",
            justifyContent: "center",
         },
         home: {
            flex: 1,

         },
         oi: {
            fontSize: 32,
            backgroundColor: "#fff",
            width: "50%",
            // height: "50%",
            aspectRatio: "1 / 1",
            color: "#27f",
            textAlign: "center",
         },
      }
   );


   return( <>
      <View style={ styles.app }>
         <StatusBar style={ { backgroundColor: "#1b1d22", } } />
         <AppBar />
         <View style={ styles.home }>
            <Text style={ styles.oi }>Lýh te amo</Text>
         </View>
      </View>
   </> );
}

