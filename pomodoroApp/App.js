
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Counter = (props) => {

  setInterval(props.increment,1000);
  
  return (
    <View>
      <Text>{props.counter}</Text>
    </View>
  );

};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter : 0,
    }
  }


  increment() {
    this.setState(
      {
        counter : this.state.counter + 1
      }
    )
  }


  render() {    
    return (
      <Counter increment={() => this.increment} counter={this.state.counter} />
    );
  }

}


let time = 0

const Counter2 = () => {

  time++;

  return (
    <View>
      <Text>{time}</Text>
    </View>
  )
}


export default App2 = () => {
  return <Counter2/>
}