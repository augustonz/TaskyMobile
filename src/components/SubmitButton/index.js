import React from 'react';
import { Container, Label } from './styles';

export default function SubmitButton({text,onClick}){
    return(
        <Container onPress={onClick}>
            <Label>{text}</Label>
        </Container>
    )
}