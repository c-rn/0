

import React from "react";
import {
   StyleSheet,
   View, 
   Text, TextInput, 
} from "react-native";


export default function HandlingTextInput() {
   const 
      [ text, setText ] = React.useState( "" )
   ;

   return( <>
      <View style={ { padding: 16 } }>
         <TextInput 
            style={ { height: 40, backgroundColor: "#fc0fc0", borderRadius: 13, padding: 5, } }
            placeholder="Type here"
            onChangeText={ newText => setText( newText ) }
            defaultValue={ text }
            onSubmitEditing={ () => {} }
         />
         <Text >
            {
               text 
                  .split( " " )
                  .map( word => word && "♥" )
                  .join( " " )
            }
         </Text>
      </View>
   </> );
}