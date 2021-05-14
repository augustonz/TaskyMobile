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

export default function Task({task}) {
  const {deleteTask, updateTask} = useApiContext();

  async function handleSubmitDelete() {
    console.log(task._id);
    const response = await deleteTask(task._id);
  }

  async function handleSubmitEdit() {
    const response = await updateTask(task._id, task);
  }

  return (
    <Container>
      <TaskWrapper>
        <Label>{task.name}</Label>
        <Label>{task.highPriority}</Label>
      </TaskWrapper>
      <IconsWrapper>
        <EditIcon name="edit" onPress={handleSubmitEdit} />
        <DeleteIcon name="trash" onPress={handleSubmitDelete} />
      </IconsWrapper>
    </Container>
  );
}
