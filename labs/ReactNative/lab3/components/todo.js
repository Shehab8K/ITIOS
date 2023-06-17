import { useCallback, useContext, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import styles from '../styles';
import TasksContextProvider,{tasksContext} from '../contexts/tasksContextProvider';
export default function ToDoList(){
    return ( 
    <TasksContextProvider test="mahmoud2">
        <TasksProviderComp></TasksProviderComp>
    </TasksContextProvider>)
}
function TasksProviderComp() {
    const [task, setTask] = useState("")
    const {AllTasks,postTask,updateTask,deleteTask}= useContext(tasksContext)
    const setTaskName = useCallback((val) => {
        setTask(val)
    })
    const createTask = useCallback(() => {
        postTask({ title: task, done: false })
        setTask("")
    })

    return (
        <View style={{marginHorizontal:15}}>
            <View style={[styles.flex]}>
                <TextInput style={{height:40,flex:1,borderWidth:1,borderStyle:"solid",borderColor:"black",borderRadius:5,paddingLeft:15}} 
                placeholder='Enter Task Name' 
                onChangeText={setTaskName}
                value={task}></TextInput>
                <Pressable disabled={task.length>0?false:true} style={[styles.btnContainer,{opacity:task.length>0?1:.5}]} onPress={createTask}>
                    <Text>Add</Text>
                </Pressable>
                </View>
            <TasksContextProvider >
            <FlatList data={AllTasks}
                keyExtractor={task => task.id}
                renderItem={(task) => (
                    <View style={styles.flex}>
                        <View style={styles.flex}>
                            <CheckBox
                            style={{marginRight:10}}
                                value={task.item.done}
                                onValueChange={()=>{updateTask(task.item)}}
                            />
                            <Text style={{textDecorationLine: task.item.done?"line-through":"none"}} >{task.item.title}</Text>
                        </View>
                        <Pressable disabled={!task.item.done}  style={[styles.btnContainer,{opacity:task.item.done?1:.7}]} onPress={() => deleteTask(task.item)}>
                            <Text>delete</Text>
                        </Pressable>
                    </View>)}
            ></FlatList>
        </TasksContextProvider>
        </View>
    );
}