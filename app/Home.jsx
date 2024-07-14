

import {
   StyleSheet,
   View,
   Text,
   Pressable,
} from "react-native";
import { Link } from "expo-router";
import styles from "./styles";
import MainLinks from "../src/widgets/MainLinks";


export default function Home( props ) {
   
   
   return( <>
      <View style={ styles.homepage }>
         <Text style={ styles.text }>Homepage</Text>
         <View style={ {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#16181c",
            width: "100%",
            height: 48,
         } }>
            <Link href="./" asChild>
               <Pressable>
                  <Text>Casa</Text>
               </Pressable>
            </Link>
            <Link href="./Contacts" asChild>
               <Pressable>
                  <Text>Contatos</Text>
               </Pressable>
            </Link>
            <Link href="./About" asChild>
               <Pressable>
                  <Text>Sobre</Text>
               </Pressable>
            </Link>
         </View>
         <MainLinks />
      </View>
   </> );
} 