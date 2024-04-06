

import React from "react";
import {
   StyleSheet,
   View, ScrollView,
   Text, TextInput, 
   Image
} from "react-native";


export default function HandlingTextInput() {
   const 
      [ image, setImage ] = React.useState( { 
         uri: "https://img.freepik.com/vetores-gratis/simbolo-de-anarquia-desenhado-a-mao_23-2149244363.jpg" ,
         width: 64, height: 64,
      } )
   ;

   return( <>
      <ScrollView style={ { flex: 1, width: "100%", } } showsVerticalScrollIndicator={ false }>
         <Text>oi</Text>
         <Image source={ image } />
         <Image source={ image } />
         <Image source={ image } />

         <Text>oi</Text>
         <Image source={ image } />
         <Image source={ image } />
         <Image source={ image } />

         <Text>oi</Text>
         <Image source={ image } />
         <Image source={ image } />
         <Image source={ image } />

         <Text>oi</Text>
         <Image source={ image } />
         <Image source={ image } />
         <Image source={ image } />

         <Text>oi</Text>
         <Image source={ image } />
         <Image source={ image } />
         <Image source={ image } />
      </ScrollView>
   </> );
}