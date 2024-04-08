

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
   StyleSheet, 
   View, 
   Text, 
   Pressable 
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
/*import clb from "./src/tools/clb";
import AppBar from "./src/lib/Appbar";
import Views from "./src/views";
import Learning from "./src/views/Learning";


export default function App() {
   const styles = StyleSheet.create(
      {
         app: {
            flex: 1,
            backgroundColor: "#212329",
            alignItems: "center",
            justifyContent: "center",
         },
         homePage: {
            flex: 1,
            width: "100%",
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
      //[ Viewholder, setViewholder ] = useState( Views.Home )
      [ Viewholder, setViewholder ] = useState( 
         <Views.Home onExit={ 
            data => setViewholder( data ) 
         } /> 
      )
   ;

   _( { "view:" : view } );
   _( { "Viewholder:" : Viewholder } );

   if( view == Views.About ) {
      Viewholder = <Views.About />;
   } else if( view == Views.Home ) {
      Viewholder = ( <Views.Home onExit={ 
         data => { 
            setViewholder( data ); 
         } 
      }/> );
   }




   return( <>
      <View style={ styles.app }>
         <StatusBar style={ { backgroundColor: "#1b1d22", } } />
         <AppBar />
         <Pressable onPress={ () => { setViewholder( 
            <Views.About onExit={ data => setViewholder( data ) } />
         ); } }>
            <Text>About</Text>
         </Pressable>
         <Pressable onPress={ () => { setViewholder( 
            <Views.Home onExit={ data => setViewholder( data ) } />
         ); } }>
            <Text>Home</Text>
         </Pressable>

         <Pressable onPress={ () => setViewholder(
            <Learning.state />
         ) }>
            <Text>state</Text>
         </Pressable>

         <Pressable onPress={ () => setViewholder(
            <Learning.HandlingTextInput />
         ) }>
            <Text>Handling Text Input</Text>
         </Pressable>

         <Pressable onPress={ () => setViewholder(
            <Learning.UsingScrollView />
         ) } >
            <Text>Using ScrollView</Text>
         </Pressable>

         <Pressable onPress={ () => setViewholder(
            <Learning.flatList />
         ) } >
            <Text>Using FlatList</Text>
         </Pressable>

         <Pressable onPress={ () => setViewholder(
            <Learning.SectionListBasics />
         ) } >
            <Text>SectionList Basics</Text>
         </Pressable>

         <View style={ styles.homePage }>
            { Viewholder }
         </View>
         
         <View style={ { flex: 1, padding: 10, } }>
            <Link href="./src/Views/Contacts.jsx">
               contacts
            </Link>
         </View>
      </View>
   </> );
}

 */
 
 
 export default function App() {
    
    return( <>
       <View style={ { flex: 1, backgroundColor: #212329, } }>
         <Text>App index</Text>
       </View>
    </> );
 }