import React from 'react';
import { useApiContext } from '../../contexts/apiContext';
import {Container, Logo, LogoutIcon} from './styles.js';

export default function Header(props) {

    const { logout } = useApiContext();

    async function handleSubmitLogout() {
        const response = await logout();
        if (response.error){
            setError(response.error);
        } else {
            navigation.goBack();
        }
    }

    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />
            <LogoutIcon name='sign-out' onPress={handleSubmitLogout}/>
        </Container>
    )
}