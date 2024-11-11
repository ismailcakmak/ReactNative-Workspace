import React from 'react'
import {Button, View} from 'react-native'

import ContactList from '../components/ContactsList'
import contacts from '../scripts/contacts'


class HomePage extends React.Component{

    state = {
        showContacts : true,   //for toggling contacts
        addNewContact : false, //for opening/closing addContactForm 
        contacts : contacts
    }

    toggleContact = () => {
        this.setState(prevState => ({showContacts: !prevState.showContacts}))
    }

    handleSubmit = (obj) => {
        this.state.addNewContact = false
        this.setState(prevState => {
          const lastKey = prevState.contacts[prevState.contacts.length-1].key
          return (
            {
            contacts: [
                ...prevState.contacts, 
                {...obj, key: lastKey+1}
            ]}
          )
        })
      }
    

    render(){
        return (
        <View>
            <Button title="Toogle Contacts" onPress={this.toggleContact}/>
            <Button title="Add New Contact" onPress={() => this.props.navigation.push('AddContactPage',{handleSubmit : this.handleSubmit})}/>
            {this.state.showContacts && 
                <ContactList contacts={this.state.contacts}/>
            }
        </View>
        )
    }
}

export default HomePage