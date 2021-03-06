import React, {useState} from 'react';
import {useApiContext} from '../../contexts/apiContext';
import {Container, Link, ErrorMsg, Text} from './styles';
import MyInput from '../../components/MyInput';
import SubmitButton from '../../components/SubmitButton';
import Title from '../../components/Title';
import Loading from '../../components/Loading';

export default function Login({navigation}) {
  const {login, loading} = useApiContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit() {
    const response = await login({email, password});
    if (response.error) {
      setError(response.error);
    } else {
      navigation.navigate('Tasks');
    }
  }

  return (
    <Container behavior="height">
      <Title text="Login" />
      <MyInput label="E-mail:" value={email} onChange={setEmail} />
      <MyInput
        secure={true}
        label="Senha:"
        value={password}
        onChange={setPassword}
      />
      <ErrorMsg>{error}</ErrorMsg>
      <SubmitButton onClick={handleSubmit}>
        Confirmar{loading ? <Loading /> : null}
      </SubmitButton>
      <Text>
        Nao está cadastrado ainda?{' '}
        <Link onPress={() => navigation.navigate('SignUp')}>Cadastre-se</Link>
      </Text>
    </Container>
  );
}
