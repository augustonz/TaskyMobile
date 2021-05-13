import React from 'react';
import { Container, Label } from './styles';

export default function Task({task}){

    return(
        <Container>
            <Label>{task.name}</Label>
            <Label>{task.highPriority}</Label>
        </Container>
    )
}