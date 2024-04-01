

import React from "react";
import {
   StyleSheet,
   View, ScrollView,
   Text,
   Pressable
} from "react-native";
import Views from ".";



export default function Home( props ) {

   return( <>
      <View>
         <Text>Home</Text>
         <Pressable onPress={ () => props.onExit( Views.About ) }>
            <Text>About btn</Text>
         </Pressable>
      </View>
   </> );
}