import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Routes from './routes'

export default props => {
    return(
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    )
}