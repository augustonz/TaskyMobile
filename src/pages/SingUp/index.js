import React, {useState} from 'react';
import {useApiContext} from '../../contexts/apiContext';
import {Container, Link, ErrorMsg, LoadingIcon, Text} from './styles';
import MyInput  from '../../components/MyInput';
import SubmitButton from '../../components/SubmitButton';
import Title from '../../components/Title';

export default function SingUp({navigation}) {

    const {register,loading} = useApiContext();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    async function handleSubmit() {
        const response = await register({name,email,password});
        if (response.error) {
            setError(response.error);
        } else {
            navigation.navigate('Tasks');
        }
        console.log(response);
    }

    return (
        <Container>
            <Title text='Registrar'/>
            <MyInput label='Nome' value={name} onChange={setName}/>
            <MyInput label='E-mail' value={email} onChange={setEmail}/>
            <MyInput label='Senha' value={password} onChange={setPassword}/>
            <ErrorMsg>{error}</ErrorMsg>
            <SubmitButton text='Sing Up' onClick={handleSubmit}>Confirmar{loading?<LoadingIcon name='rocket' />:null}</SubmitButton>
            <Text>Already have an Account? <Link onPress={() => navigation.goBack() }>Sign In</Link></Text>
        </Container>
    )
}