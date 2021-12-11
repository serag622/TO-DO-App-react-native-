import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, FlatList } from 'react-native';
import Checkbox from 'expo-checkbox';




export  function Dolist({todos,handelchecked,handeldelete}){

    const [done,setDone]= useState(0)

    const handelDoneTasks=()=>{
        let n=0
        if(todos.length>0){
        todos.forEach((item)=>{
            item.done?n++:''
            setDone(n)    
        })
       }else{
           setDone(0)
       }
    } 

    return(
        <FlatList style={styles.view} data={todos}
        renderItem={({item,index})=>{
            return(
                <View style={styles.container} >
                <Text style={item.done ? {textDecorationLine: 'line-through',...styles.text}:{...styles.text}}>{item.title}</Text>
                <Checkbox value={item.done} onValueChange={()=>{handelchecked(index); handelDoneTasks()}}  />
                 <TouchableOpacity style={styles.btn} onPress={()=>{handeldelete(index); handelDoneTasks()}} >
                    <Text style={styles.btntext}>delete</Text>
                </TouchableOpacity>
               </View>
            )
        }}

        ListHeaderComponent={()=>(
            <Text style={styles.header}> Thera are {done}  done Task of {todos.length}  </Text>
        )}
        ListEmptyComponent={()=>(
            <Text style={styles.header}>No Tasks today</Text>
        )}
        
        />
    );
}

const styles = StyleSheet.create({
    view:{
        borderWidth:5,
        borderColor:'black',
    },
    container: {
        display: 'flex',
        flexDirection :'row',
        margin: 5,
        padding:10,
        justifyContent:'space-between',
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
    },
    btn:{
        backgroundColor:'black',
        borderRadius:10,
       },
       btntext:{
        color:'white',
        textAlign:'center',
        fontSize:22,
        padding:10,
       },
       header:{
           textAlign:'center',
           fontSize:28,
           fontWeight:'bold',
           margin:10,
           marginBottom:15,
       },
      


})