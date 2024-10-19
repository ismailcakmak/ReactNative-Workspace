import React from 'react';
import {Text, Button, View, ScrollView, Switch} from 'react-native';

const Todo = props => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Button onPress={props.deletetodo} title="Delete" />
    <Text> {props.name} </Text>
    <Switch value={props.checked} onValueChange={props.toggleTodo} />
  </View>
);

let id = 1;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
    };
  }

  addTodo = () => {
    const itemName = 'mytodoooo' + String(id);
    this.setState({
      todolist: [
        ...this.state.todolist,
        {id: id, text: itemName, checked: false},
      ],
    });
    id++;
  };

  deleteTodo = function (id) {
    this.setState({
      todolist: this.state.todolist.filter(todo => todo.id !== id),
    });
  };

  toggleTodo = function (id) {
    this.setState({
      todolist: this.state.todolist.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  };

  render() {
    return (
      <View>
        <Text>TO-DO count: {this.state.todolist.length}</Text>
        <Button onPress={() => this.addTodo()} title="Click To Add TO-DO" />
        <ScrollView>
          {this.state.todolist.map(item => (
            <Todo
              deletetodo={() => this.deleteTodo(item.id)}
              toggleTodo={() => this.toggleTodo(item.id)}
              name={item.text}
              checked={item.checked}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default function App() {
  return <TodoApp />;
}
