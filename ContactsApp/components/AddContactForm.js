import React from 'react';
import {
  StyleSheet,
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
      phone : ""
    }

    onChangeName = (name) => {
      if (! +name) {
        this.setState({name:name})
      }
    }
    
    onChangeNumber = (number) => {
      console.log(number)
      if (+number>=0 && number.length<=10){
        this.setState({phone:number})
      }
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
            value = {this.state.phone}
            onChangeText={this.onChangeNumber}
            keyboardType='numeric'
          />
          <Button 
            title = "Submit" 
            onPress={()=>{this.props.handleSubmit(this.state)}}
            />
        </View>
      )
    }
}


export default AddContactForm