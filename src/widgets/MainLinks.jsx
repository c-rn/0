

import React from "react";
import { Link } from "expo-router";
import {
   StyleSheet,
   View, Text, Pressable
} from "react-native";


export default function MainLinks( props ) {
   
   
   return( <>
      <View style={ s.menu }>
         <Link href="./" style={ s.link }>
            <Text style={ s.linkText }>Casa</Text>
         </Link>
         <Link href="./Home" style={ s.link }>
            <Text style={ s.linkText }>Home</Text>
         </Link>
         <Link href="./Contacts" style={ s.link }>
            <Text style={ s.linkText }>Contatos</Text>
         </Link>
         <Link href="./About" style={ s.link }>
            <Text style={ s.linkText }>Sobre</Text>
         </Link>
      </View>
   </> );
}

const 
   s = StyleSheet.create( {
      menu: {
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "space-between",
         paddingLeft: 16,
         paddingRight: 16,
         width: "100%",
         height: 48,
         backgroundColor: "#16181c",
      },
      link: {
         alignItems: "center",
         justifyContent: "center",
         heigth: "100%",
      },
      linkText: {
         textTransform: "uppercase",
         color: "#fc0",
         
      }
   } )
;