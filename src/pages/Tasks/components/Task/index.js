import React from 'react';
import { Container, Label } from './styles';

export default function Task({task}){
    return(
        <Container onPress={onClick}>
            <Label>{text}</Label>
        </Container>
    )
}