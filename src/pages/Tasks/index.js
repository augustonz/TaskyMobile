import React,{useEffect} from 'react'
import { Text,View } from 'react-native'
import { useApiContext} from './../../contexts/apiContext';
import Task from './components/Task';
export default function Tasks(){

    const {tasks,addTask,refreshTasks,deleteTask,updateTask,loading} = useApiContext();

    useEffect(()=>{
        refreshTasks();
    },[])

    return(
        <View>
            <Text> Tasks </Text>
            {tasks.map((task)=>(<Task task={task}/>))}
        </View>
    )
}