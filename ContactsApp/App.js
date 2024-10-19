
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
  FlatList,
  SectionList,
} from 'react-native';

import contacts from './scripts/contacts'
import ContactList from './components/ContactsList.js'
import AddContactForm from './components/AddContactForm.js'

//console.log(contacts); //  Log the  contacts to ensure it's an array

class App extends React.Component{

  state = {
    showContacts : true,
    addNewContact : false,
    contacts : contacts
  }

  toggleContact = () => {
    this.setState({showContacts: !this.state.showContacts})
    //this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }
  
  addNewContact = () => {
    this.setState(prevState => ({...prevState, addNewContact : !prevState.addNewContact}))
  }

  handleSubmit = (obj) => {
    this.state.addNewContact = false
    this.setState(prevState => {
      const lastKey = prevState.contacts[prevState.contacts.length-1].key
      return (
        {
        ...prevState, 
        contacts: [
            ...prevState.contacts, 
            {...obj, key: lastKey+1}
        ]}
      )
    })
  }

  render(){
    console.log(this.state.contacts)
    if(this.state.addNewContact){
      return (
        <View>
          <AddContactForm handleSubmit= {this.handleSubmit}/>
        </View>
      )
    }

    return (
      <View>
        <Button title="Toogle Contacts" onPress={this.toggleContact}/>
        <Button title="Add New Contact" onPress={this.addNewContact}/>
        {this.state.showContacts && 
          <ContactList contacts={this.state.contacts}/>
        }
      </View>
    )
  }
}

// {contacts.map(contact => contactItem(contact))}

export default App;
