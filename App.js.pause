

import React from "react";
import { StatusBar } from "expo-status-bar";
import AppBar from "./src/lib/Appbar";
import Welcome from "./src/lib/welcome";
import Loading from "./src/lib/loading";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
   const styles = StyleSheet.create(
      {
         app: {
            flex: 1,
            backgroundColor: "#fff",
         },
         body: {
            flex: 1,
            backgroundColor: "#212329",
         },
         bg: { backgroundColor: "#212329", width: "100%", }
      }
   );
   let names = [ 
      {
         id: 1,
         name: "Débora",
         email: "debora.mc.sammarco@gmail.com",
      }, 
      {
         id: 2,
         name: "Anselmo",
         email: "noah.kd@gmail.com",
      }, 
      {
         id: 3,
         name: "Noely",
         email: "noely.gangello@gmail.com",
      }, 
      {
         id: 4,
         name: "Bernardo",
         email: "bernardo.sammarco.gangello@gmail.com",
      }, 
   ];

   return( <>
      <View style={ styles.app }>
         <StatusBar style={ { backgroundColor: "#1b1d22", } } />
         <AppBar />
         <View style={ styles.body }>

            {
               names.map( person => {
                  console.log( { person: person.name } );
                  return( <>
                     <Text>{ "== == == == == == == == ==" }</Text>
                     <Welcome key={ Math.random() + 100000 } name={ person.name } />
                     <Text>{ person.email }</Text>
                     <Text>{ person.id }</Text>
                     <Text>{ "== == == == == == == == ==" }</Text>
                  </> );
               } )
            }
            <Welcome name="ceo" />
            <Loading />
         </View>
      </View>
   </> );
}
