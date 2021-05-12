import React from 'react';
import {Container, Logo} from './styles.js';

export default function Header(props) {

    return (
        <Container>
            <Logo source={require('../../assets/logo.png')} />
        </Container>
    )
}