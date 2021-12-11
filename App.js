import React,{useState} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import {Todolist} from './src/Components/Todolist'
import { Dolist } from './src/Components/Dolist';

export default function App() {

const [todos,setTodos] = useState([]); 

const handleTodoADD = (todo)=>{
  setTodos([...todos,todo])
}

const handelchecked=(index)=>{
  setTodos(()=>{
    todos[index].done = !todos[index].done;
    return [...todos]
  })
}

const handeldelete=(index)=>{
  setTodos(()=>{
    todos.splice(index,1)
    return [...todos]
  })
}

  return (
    <View style={styles.container}>
      <StatusBar/>
     <Text style={styles.header}>Header</Text>

     <Todolist onTodoADD={handleTodoADD}/>

     <Dolist todos={todos} handelchecked={handelchecked} handeldelete={handeldelete} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  header: {
    backgroundColor:'black',
    color:'white',
    width:'100%',
    textAlign:'center',
    fontSize:28,
    padding:10,
  }
});
