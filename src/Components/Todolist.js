import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export  function Todolist({onTodoADD}){

    const [task,settask]= useState('');
    const handletask=()=>{
        const todo={
            title:task,
            done:false
        }
        onTodoADD(todo)
        settask('')
    }

    return(
        <View style={styles.container} >
            <TextInput style={styles.input} value={task} onChangeText={(text) =>settask(text)} placeholder="enter your todo"/>

            <TouchableOpacity style={styles.btn} onPress={handletask}>
            <Text style={styles.btntext}>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection :'row',
        margin: 2,
        padding:10,
        justifyContent:'space-between',
    },
    input:{
       borderWidth:2,
       width:'55%',
       padding:5,
    },
    btn:{
     backgroundColor:'black',
     width:'35%',
     borderRadius:10,
     margin:'auto'
    },
    btntext:{
     color:'white',
     textAlign:'center',
     fontSize:22,
     margin:5,
    },
    
  });