

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
   let names = [ "Débora", "Anselmo", "Noely", "Bernardo", ];

   return( <>
      <View style={ styles.app }>
         <StatusBar style={ { backgroundColor: "#1b1d22", } } />
         <AppBar />
         <View style={ styles.body }>

            {
               // names.forEach( name => {
               // <Welcome key={ name } name={ name } />;
               <Text>oi</Text>
               // } )
            }
            <Welcome name="ceo" />
            <Loading />
         </View>
      </View>
   </> );
}
