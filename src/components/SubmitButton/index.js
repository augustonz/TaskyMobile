import React from 'react';
import { Container, Label } from './styles';

export default function SubmitButton({children,onClick}){
    return(
        <Container onPress={onClick}>
            <Label>{children}</Label>
        </Container>
    )
}