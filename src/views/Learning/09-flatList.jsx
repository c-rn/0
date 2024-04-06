

import React from "react";
import {
   StyleSheet,
   View, 
   Text, TextInput, FlatList, 
} from "react-native";


export default function HandlingTextInput() {
   const 
      [ text, setText ] = React.useState( "" )
   ;

   return( <>
      <FlatList data={
         [
            { key: "Débora" },
            { key: "Anselmo" },
            { key: "Gabriel" },
            { key: "Rafael" },
            { key: "Beatriz" },
            { key: "Léo" },
            { key: "Felipe" },
            { key: "Miguel" },
            { key: "Noely" },
            { key: "Bernardo" },
         ]
      }
      renderItem={ ( { item } ) => {
         return( <Text >{ item.key }</Text> );
      } } />
   </> );
}