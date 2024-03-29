

import React, { Component } from "react";
import {
   StyleSheet,
   View,
   Text,
   Animated
} from "react-native";


export default class Loading extends Component {
   constructor( props ) {
      super( props );
      this.state = {
         width: new Animated.Value( 150 ),
         height: new Animated.Value( 50 ),
      };
      
      Animated.timing(
         this.state.width,
         {
            toValue: 300,
            duration: 3000,
         }
      ).start();
   }


   render() {
      const styles = StyleSheet.create( {
         view: {
            width: "100%",
            height: "350px",
            padding: 50,
            alignContent: "center",
            justifyContent: "center",
         },
         box: {
            width: this.state.width,
            height: this.state.height,
            backgroundColor: "#fc0fc0",
            padding: 50,
            alignContent: "center",
            justifyContent: "center",
         },
         text: {
            color: "#fff",
            fontSize: 32,
         },
      } );

      return( <>
         <Animated.View style={ styles.view }>
            <View style={ styles.box }>
               <Text style={ styles.text }>loading...</Text>
            </View>
         </Animated.View>
      </> );
   }
}
