import React,{useEffect, useState} from 'react'
import MyInput from '../../components/MyInput';
import SubmitButton from '../../components/SubmitButton';
import Title from '../../components/Title';
import { useApiContext } from './../../contexts/apiContext';
import Task from './components/Task';
import { Container, Header, LogoutIcon, List} from './styles'

export default function Tasks({navigation}){

    const {tasks,addTask,refreshTasks,deleteTask,updateTask,loading, logout} = useApiContext();

    const [name, setName] = useState("")
    const [highPriority, setPriority] = useState("")

    async function handleSubmitLogout() {
        const response = await logout();
        if (response.error){
            setError(response.error);
        } else {
            navigation.navigate('Login');
        }
        console.log(response);
    }

    async function handleSubmit() {
        const response = await addTask({
            name, 
            highPriority
        });

        if (response.error){
            setError(response.error);
        } else {
            refreshTasks();
        }
        console.log(response);
    }


    useEffect(()=>{
        refreshTasks();
    },[])

    return(
        <Container>
            <Header>
                <Title text='My Tasks'/>    
                <LogoutIcon name='user' onPress={handleSubmitLogout}/>
            </Header>

            <List
                data={tasks}
                keyExtractor = {task => task._id}
                renderItem={tasks.map((task)=>(<Task task={task}/>))}
                ListFooterComponentStyle={() => (
                    <Task>
                        <MyInput label="Name:" value={name} onChange={setName}/>
                        <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
                    </Task>
                )}
            />
      
        </Container>
    )
}