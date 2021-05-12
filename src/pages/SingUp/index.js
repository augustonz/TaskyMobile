import React, {useState} from 'react';
import MyInput  from '../../components/MyInput';
import SubmitButton from '../../components/SubmitButton';
import {useNavigation} from '@react-navigation/native';
import {Container, Link} from './styles';
import { Text } from 'react-native'
import Title from '../../components/Title';

export default function SingUp() {

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const navigation = useNavigation();


    function handleSubmit() {
        console.log('Email: ' + email);
        console.log('Senha: ' + senha);
    }

    return (
        <Container>
            <Title text='Create Account'/>
            <MyInput label='E-mail' value={email} onChange={setEmail}/>
            <MyInput label='Password' value={senha} onChange={setSenha}/>
            <SubmitButton text='Sing Up' onClick={handleSubmit}/>
            <Text>Already have an Account? <Link onPress={() => navigation.goBack() }>Sign In</Link></Text>
        </Container>
    )
}