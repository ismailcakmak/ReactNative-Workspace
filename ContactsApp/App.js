import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './src/screens/HomePage.js'
import AddContactPage from './src/screens/AddContactPage.js'

Stack = createStackNavigator()

class App extends React.Component{
    
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name='HomePage' component={HomePage}/>
          <Stack.Screen name="AddContactPage" component={AddContactPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;
