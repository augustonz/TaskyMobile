import React, {useState} from 'react';
import {useApiContext} from '../../contexts/apiContext';
import {Container, Link, ErrorMsg, LoadingIcon, Text} from './styles';
import  MyInput  from '../../components/MyInput';
import  SubmitButton from '../../components/SubmitButton';
import Title from '../../components/Title';

export default function Login({navigation}) {
    const {login,loading} = useApiContext();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    async function handleSubmit() {
        const response = await login({email,password});
        if (response.error){
            setError(response.error);
        } else {
            navigation.navigate('Tasks');
        }
        console.log(response);
    }

    return (
        <Container behavior='height'>
            <Title text='Login'/>
            <MyInput label='E-mail:' value={email} onChange={setEmail}/>
            <MyInput label='Password:' value={password} onChange={setPassword}/>
            <ErrorMsg>{error}</ErrorMsg>
            <SubmitButton  onClick={handleSubmit}>Confirmar{loading?<LoadingIcon name='rocket' />:null}</SubmitButton>
            <Text>Not registered yet ? <Link onPress={() => navigation.navigate('SignUp') }>Create account</Link></Text>
        </Container>
    )
}