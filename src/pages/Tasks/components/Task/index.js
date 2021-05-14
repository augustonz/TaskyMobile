import React from 'react';
import {useApiContext} from '../../../../contexts/apiContext';
import {
  Container,
  Label,
  IconsWrapper,
  EditIcon,
  DeleteIcon,
  TaskWrapper,
} from './styles';

export default function Task({task,select}) {
  const {deleteTask} = useApiContext();

  async function handleSubmitDelete() {
    const response = await deleteTask(task._id);
  }

  async function handleSubmitEdit() {
    select(task);
  }

  return (
    <Container>
      <TaskWrapper>
        <Label>{task.name}</Label>
        <Label>{task.highPriority?"Alta":"Baixa"}</Label>
      </TaskWrapper>
      <IconsWrapper>
        <EditIcon name="edit" onPress={handleSubmitEdit} />
        <DeleteIcon name="trash" onPress={handleSubmitDelete} />
      </IconsWrapper>
    </Container>
  );
}
