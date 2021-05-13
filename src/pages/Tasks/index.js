import React,{useEffect, useState} from 'react'
import Title from '../../components/Title';
import { useApiContext } from './../../contexts/apiContext';
import Task from './components/Task';
import NewTask from './components/NewTask';
import { Container, Header, LogoutIcon, LoadingIcon, List} from './styles'

export default function Tasks({navigation}){

    const {user,tasks,addTask,refreshTasks,deleteTask,updateTask,loading, logout} = useApiContext();

    const [error,setError] = useState('');

    async function handleSubmitLogout() {
        const response = await logout();
        if (response.error){
            setError(response.error);
        } else {
            navigation.goBack();
        }
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

            {loading?<LoadingIcon name='loading1' onPress={handleSubmitLogout}/>:
            <List data={tasks}
                numColumns='2'
                keyExtractor = {item => item._id}
                renderItem={({item})=><Task task={item}/>}
                ListFooterComponent={<NewTask/>}
                extraData={tasks}/>}
        </Container>
    )
}