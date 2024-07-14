

import React from "react";
import {
   StyleSheet, View, Text
} from "react-native";
import styles from "./styles";
import MainLinks from "../src/widgets/MainLinks";


export default function About( props ) {
   
   return( <>
      <View style={ styles.homepage }>
         <Text style={ styles.text }>Contacts page</Text>
         <View>
         </View>
            <MainLinks />
      </View>
   </> );
}