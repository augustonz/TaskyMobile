import React from 'react';
import { Container, TextInput, Label, InputWrapper } from './styles';

export default function MyInput({label,onChange,value,secure=false}){

    return(
        <InputWrapper>
            <Label>{label}</Label>
            <Container> 
                <TextInput secureTextEntry={secure} value={value} onChangeText={(event)=>onChange(event)} keyboardType='default'/>
            </Container>
        </InputWrapper>
    )
}