import React from 'react'
import { LoadingIcon, Container } from './styles'

export default function Loading(name){
    return(
        <Container>
            <LoadingIcon name={name}/>
        </Container>
    )
}
