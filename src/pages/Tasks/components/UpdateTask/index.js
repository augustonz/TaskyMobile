import React,{useEffect, useState} from 'react';
import { Container, Label, Row } from './styles';
import { useApiContext } from '../../../../contexts/apiContext';
import MyInput from '../../../../components/MyInput';
import SubmitButton from '../../../../components/SubmitButton';
import ToggleSwitch from 'toggle-switch-react-native';

export default function UpdateTask({task,select}){
    
    const {updateTask} = useApiContext();

    const [name, setName] = useState(task.name);
    const [highPriority, setPriority] = useState(task.highPriority);
    const [error, setError] = useState("");
    
    useEffect(()=>{
        setName(task.name);
        setPriority(task.highPriority);
    },[task]);

    async function handleSubmit() {

        if (name.trim()==='') {
            setError('Por favor, insira o nome da task.')
        } else {
            const response = await updateTask(task._id,{
                name, 
                highPriority
            });
    
            setName('');
            setPriority(false);
            select(null);

            if (response.error){
                setError(response.error);
            }
        }
    }

    async function cancelUpdate() {
        select(null);
    }


    return(
        <Container>
            <MyInput label="Nome:" value={name} onChange={setName}/>
            <ToggleSwitch
            isOn={highPriority}
            onColor="green"
            offColor="red"
            label="Prioridade:"
            labelStyle={{color: '#636363', fontWeight: '900', fontSize: 16}}
            size="small"
            onToggle={isOn => setPriority(isOn)}
        />
            {error?<Label>{error}</Label>:null}
            <Row>
                <SubmitButton onClick={handleSubmit}>Confirmar</SubmitButton>
                <SubmitButton onClick={cancelUpdate}>Cancelar</SubmitButton>
            </Row>
            
        </Container>
    )
}