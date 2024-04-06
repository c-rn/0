

import React from "react";
import {
   StyleSheet,
   View, 
   Text, TextInput, Button, 
} from "react-native";

function Cat( props ) {
   const [ isHungry, setIsHungry ] = React.useState( true );

   return( <>
      <View>
         <Text>
            I am { props.name }, and i am { isHungry ? "hungry" : "full" }
         </Text>
         <Button onPress={ () => setIsHungry( false ) }
            disabled={ !isHungry }
            title={ isHungry ? "Pour me some milk, please!" : "Thank you!" }
         />
      </View>
   </> );
}
export default function state() {
   const 
      [ text, setText ] = React.useState( "" )
   ;

   return( <>
      <View>
         <Cat name="Nichokas" />
         <Cat name="Nicole" />
      </View>
   </> );
}