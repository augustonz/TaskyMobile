import React,{useState} from 'react';
import { Container, Label } from './styles';
import { useApiContext } from '../../../../contexts/apiContext';
import MyInput from '../../../../components/MyInput';
import SubmitButton from '../../../../components/SubmitButton';

export default function NewTask(){
    
    const {addTask} = useApiContext();

    const [name, setName] = useState("");
    const [highPriority, setPriority] = useState(false);
    const [error, setError] = useState("");
    
    async function handleSubmit() {

        if (name.trim()==='') {
            setError('Por favor, insira o nome da nova task.')
        }

        const response = await addTask({
            name, 
            highPriority
        });

        setName('');
        setPriority(false);

        if (response.error){
            setError(response.error);
        }
    }

    return(
        <Container>
            <MyInput label="Name:" value={name} onChange={setName}/>
            {error?<Label>{error}</Label>:null}
            <SubmitButton onClick={handleSubmit}>Save</SubmitButton>
        </Container>
    )
}