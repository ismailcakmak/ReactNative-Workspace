import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16, 
  },
});

function ContactItem(props){
    return (
      <View style={styles.container}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
      </View>
    )
}

export default ContactItem;
