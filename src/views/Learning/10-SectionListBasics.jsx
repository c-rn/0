

import React from "react";
import {
   StyleSheet,
   View, 
   Text, TextInput, SectionList, 
} from "react-native";


export default function SectionListBasics() {
   const 
      [ text, setText ] = React.useState( "" )
   ;

   return( <>
      <Text>===================</Text>
      <Text>===================</Text>
      <Text>===================</Text>
      <SectionList sections={
         [
            { 
               title: "D", 
               data: [
                  "Débora"
               ] 
            },
            { 
               title: "A",
               data: [
                  "Anselmo"
               ] 
            },
            {
               title: "G",
               data: [
                  "Gabriel"
               ] 
            },
            {
               title: "R",
               data: [
                  "Rafael"
               ], 
            },
            {
               title: "B",
               data: [
                  "Beatriz"
               ], 
            },
            {
               title: "L",
               data: [
                  "Léo"
               ], 
            },
            {
               title: "F",
               data: [
                  "Felipe"
               ], 
            },
            {
               title: "M",
               data: [
                  "Miguel"
               ], 
            },
            {
               title: "N",
               data: [
                  "Noely"
               ], 
            },
            {
               title: "B",
               data: [
                  "Bernardo"
               ], 
            },
         ]
      }
      renderItem={ ( { item } ) => {
         return( <Text >{ item }</Text> );
      } }
      renderSectionHeader={ ( { section } ) => {
         <Text>{ section.title }</Text>;
      } }
      keyExtractor={ item => `basicListEntry-${ item }` } />
   </> );
}