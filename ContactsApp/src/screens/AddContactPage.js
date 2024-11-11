import React from "react"
import {
  StyleSheet,
  Button,
  View,
  TextInput,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})


class AddContactPage extends React.Component{

    state = {
        name : "",
        phone : "",
        isFormValid : false,
    }

    componentDidMount(){
        console.log(this.props)
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.name !== this.state.name || prevState.phone !== this.state.phone) {
        if(this.state.name.length>=3 && +this.state.phone>999999999){
            this.setState({isFormValid:true})
        }
        else{
            this.setState({isFormValid:false})
        } 
        }
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
            style = {styles.button}
            title = "Submit" 
            disabled = {!this.state.isFormValid}
            onPress={()=>{
                this.props.route.params.handleSubmit(this.state)
                this.props.navigation.goBack()
            }}
            />
        </View>
        )
    }
}


export default AddContactPage