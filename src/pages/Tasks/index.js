import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import {useApiContext} from './../../contexts/apiContext';
import Task from './components/Task';
import NewTask from './components/NewTask';
import {Container, Header, LoadingIcon, List} from './styles';

export default function Tasks({navigation}) {
  const {
    tasks,
    refreshTasks,
    loading,
  } = useApiContext();

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <Container>
      <Header>
        <Title text="Minhas Tasks" />
      </Header>

      {loading ? (
        <LoadingIcon name="spinner" />
      ) : (
        <List
          data={tasks}
          keyExtractor={item => item._id}
          renderItem={({item}) => <Task task={item} />}
          ListFooterComponent={<NewTask />}
          extraData={tasks}
        />
      )}
    </Container>
  );
}
