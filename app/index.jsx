

import React from "react";
import { Link } from "expo-router";
import styles from "./styles";
import {
   StyleSheet,
   View,
   Text,
   Pressable
} from "react-native";


export default function App() {
   
   return( <>
      <View style={ styles.homepage }>
         <Text style={ styles.title }>App index</Text>
         
         <View style={ styles.links }>
            <Link href="/Home" asChild>
               <Pressable>
                  <Text style={ styles.link }>Home</Text>
               </Pressable>
            </Link>
            <Link href="/About" asChild>
               <Pressable>
                  <Text style={ styles.link }>Sobre</Text>
               </Pressable>
            </Link>
            <Link href="/Contacts" asChild>
               <Pressable>
                  <Text style={ styles.link }>Contatos</Text>
               </Pressable>
            </Link>
         </View>
      </View>
   </> );
}