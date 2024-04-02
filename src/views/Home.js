

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
         <Text>&lt;- Home -&gt;</Text>
         {/*<Pressable onPress={ () => props.onExit( Views.About ) }>*/}
         <Pressable onPress={ () => props.onExit( Views.About ) }>
         {/*<Pressable onPress={ () => serViewholder( Views.About ) }>*/}
            <Text>About</Text>
         </Pressable>
      </View>
   </> );
}