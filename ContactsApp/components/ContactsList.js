import React from 'react'
import {
    SectionList,
    Text,
} from 'react-native'

import PropTypes from 'prop-types'
import Row from './Row.js'


renderItem = obj => <Row {...obj.item} />;
renderSectionHeader = obj => <Text>{obj.section.title}</Text>

ContactList = props => {

    sections = {}

    //add contacts to this object
    props.contacts.forEach( contact => {
        const firstLetter = contact.name[0]
        if (firstLetter in sections)
            sections[firstLetter].push(contact)
        else
            sections[firstLetter] = [contact]
    })

    //turn this object into a list
    sections = Object.keys(sections).map(letter => ({
        title : letter,
        data : sections[letter]
    }))

    return(
        <SectionList
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            sections={sections}
        /> 
    )
}

ContactList.PropTypes = {
    contacts : PropTypes.array,
}

export default ContactList