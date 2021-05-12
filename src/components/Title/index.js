import React from 'react';
import { Container, Text } from './styles';

export default function Title({text}){
    return(
        <Container>
            <Text>{text}</Text>
        </Container>
    )
}