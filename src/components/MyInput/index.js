import React from 'react';
import { Container, TextInput, Label, InputWrapper } from './styles';

export default function MyInput({label,onChange,value}){

    return(
        <InputWrapper>
            <Label>{label}</Label>
            <Container> 
                <TextInput value={value} onChangeText={(event)=>onChange(event)} keyboardType='default'/>
            </Container>
        </InputWrapper>
    )
}