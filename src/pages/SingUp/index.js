import React, {useState} from 'react';
import {useApiContext} from '../../contexts/apiContext';
import {Container, Link, ErrorMsg, Text} from './styles';
import MyInput from '../../components/MyInput';
import SubmitButton from '../../components/SubmitButton';
import Title from '../../components/Title';
import Loading from '../../components/Loading';

export default function SingUp({navigation}) {
  const {register, loading} = useApiContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit() {
    const response = await register({name, email, password});
    if (response.error) {
      setError(response.error);
    } else {
      navigation.navigate('Tasks');
    }
  }

  return (
    <Container>
      <Title text="Cadastre-se" />
      <MyInput label="Nome:" value={name} onChange={setName} />
      <MyInput label="E-mail:" value={email} onChange={setEmail} />
      <MyInput
        secure={true}
        label="Senha:"
        value={password}
        onChange={setPassword}
      />
      <ErrorMsg>{error}</ErrorMsg>
      <SubmitButton onClick={handleSubmit}>
        Cadastrar{loading ? <Loading /> : null}
      </SubmitButton>
      <Text>
        Já possui uma conta ?{' '}
        <Link onPress={() => navigation.goBack()}>Faça login</Link>
      </Text>
    </Container>
  );
}
