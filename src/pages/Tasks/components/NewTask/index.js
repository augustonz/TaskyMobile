import React, {useState} from 'react';
import {Container, Label} from './styles';
import {useApiContext} from '../../../../contexts/apiContext';
import MyInput from '../../../../components/MyInput';
import SubmitButton from '../../../../components/SubmitButton';
import ToggleSwitch from 'toggle-switch-react-native';

export default function NewTask() {
  const {addTask} = useApiContext();

  const [name, setName] = useState('');
  const [highPriority, setPriority] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit() {
    if (name.trim() === '') {
      setError('Por favor, insira o nome da nova task.');
    }

    const response = await addTask({
      name,
      highPriority,
    });

    setName('');
    setPriority(false);

    if (response.error) {
      setError(response.error);
    }
  }

  return (
    <Container>
      <MyInput label="Nome:" value={name} onChange={setName} />
      <ToggleSwitch
        isOn={highPriority}
        onColor="green"
        offColor="red"
        label="Prioridade:"
        labelStyle={{color: '#636363', fontWeight: '900', fontSize: 16}}
        size="small"
        onToggle={isOn => setPriority(isOn)}
      />
      <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
      {error ? <Label>{error}</Label> : null}
    </Container>
  );
}
