

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
   StyleSheet, 
   View, 
   Text, 
   Pressable 
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import clb from "./src/tools/clb";
import AppBar from "./src/lib/Appbar";
import Views from "./src/views";


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
            alignItems: "center",
            justifyContent: "center",
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

   const 
      [ view, setView ] = useState( Views.Home )
      ,
      [ Viewholder, setViewholder ] = useState( Views.Home )
   ;

   _( { "view:" : view } );
   _( { "Viewholder:" : Viewholder } );

   if( view == Views.About ) {
      Viewholder = <Views.About />;
   } else if( view == Views.Home ) {
      Viewholder = ( <Views.Home onExit={ 
         data => { 
            setView( data ); 
         } 
      }/> );
   }




   return( <>
      <View style={ styles.app }>
         <StatusBar style={ { backgroundColor: "#1b1d22", } } />
         <AppBar />
         <Pressable onPress={ () => setViewholder( Views.About ) }>
            <Text>
               Lýh te amo
            </Text>
         </Pressable>
         <View style={ styles.home }>
            { Viewholder }
         </View>
      </View>
   </> );
}

 