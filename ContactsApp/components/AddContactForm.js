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
  TextInput,
} from 'react-native';


const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

class AddContactForm extends React.Component{

    state = {
      name : "",
      number : ""
    }

    onChangeName = (name) => {
      this.setState({name})
        //this.setState(prevState => ({...prevState, name: text}))
    }
    
    onChangeNumber = (text) => {
      this.setState(prevState => ({...prevState, number: text}))
    }

    render(){
      return(
        <View>
          <TextInput
            style = {styles.input}
            placeholder="Name"
            value = {this.state.name}
            onChangeText={this.onChangeName}
          />
          <TextInput
            style = {styles.input}
            placeholder='Number'
            value = {this.state.number}
            onChangeText={this.onChangeNumber}
            keyboardType='numeric'
          />
          <Button title = "Submit" onPress={()=>{this.props.handleSubmit(this.state)}}/>
        </View>
      )
    }
}


export default AddContactForm