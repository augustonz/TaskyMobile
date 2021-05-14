import React from 'react';
import {useApiContext} from '../../contexts/apiContext';
import {Container, Logo, LogoutIcon} from './styles.js';

export default function Header({scene, navigation}) {
  const {logout} = useApiContext();

  async function handleSubmitLogout() {
    const response = await logout();
    if (!response.error) {
      navigation.navigate('Login');
    }
  }

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
      {scene.route.name == 'Tasks' ? (
        <LogoutIcon name="sign-out" onPress={handleSubmitLogout} />
      ) : null}
    </Container>
  );
}
