import React from "react";
import { StyleSheet, Text, View, } from 'react-native';
import { Button } from 'react-native-elements';

export default function ControlScreen() {

  function generateToken() {
    console.log('refreshed  token');
    fetch('http://localhost:3000/callback')
  }


  function refreshToken() {
    console.log('refreshed  token');
    fetch('http://localhost:3000/refresh_token')
  }


  function nextSong() {
   console.log('next song');
   fetch('http://localhost:3000/next')
 }

 function queueSong() {
   console.log('queued song');
   fetch('http://localhost:3000/queue')
 }
 
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress = {generateToken} title = "Generate Token"/>
      <Button onPress = {refreshToken} title = "Refresh Token"/>
      <Button onPress = {queueSong} title = "Queue Song"/>
      <Button onPress = {nextSong} title = "Next Song ->"/>
    </View>
  );
}

      const styles = StyleSheet.create({
      container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    });