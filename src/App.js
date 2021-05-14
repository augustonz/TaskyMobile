import {NavigationContainer} from '@react-navigation/native';
import {ApiContextProvider} from './contexts/apiContext';
import React from 'react';
import Routes from './routes';

export default props => {
  return (
    <NavigationContainer>
      <ApiContextProvider>
        <Routes />
      </ApiContextProvider>
    </NavigationContainer>
  );
};
