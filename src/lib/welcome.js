

import React, { Component } from "react";
import {
   StyleSheet,
   View,
   Text 
} from "react-native";


export default function Welcome( props ) {
   return( <>
      <View>
         <Text>{ props.name }</Text>
      </View>
   </> );
}