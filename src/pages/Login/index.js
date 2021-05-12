import React, {useState} from 'react';
import  MyInput  from '../../components/MyInput';
import  SubmitButton from '../../components/SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {Container, Link} from './styles';
import { Text } from 'react-native'
import Title from '../../components/Title';

export default function Login() {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const navigation = useNavigation();


    function handleSubmit() {
        console.log('Email: ' + email);
        console.log('Senha: ' + senha);
    }

    return (
        <Container>
            <Title text='Sign In'/>
            <MyInput label='E-mail:' value={email} onChange={setEmail}/>
            <MyInput label='Password:' value={senha} onChange={setSenha}/>
            <SubmitButton text='Login' onClick={handleSubmit}/>
            <Text>Not registered yet ? <Link onPress={() => navigation.navigate('SingUp') }>Create account</Link></Text>
        </Container>
    )
}