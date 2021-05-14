import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import {useApiContext} from './../../contexts/apiContext';
import Task from './components/Task';
import NewTask from './components/NewTask';
import UpdateTask from './components/UpdateTask';
import {Container, Header, LoadingIcon, List} from './styles';

export default function Tasks({navigation}) {
  const {tasks, refreshTasks, loading} = useApiContext();

  const [selectedTask,setSelected] = useState(null);

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
        <React.Fragment>
          <List
            data={tasks}
            keyExtractor={item => item._id}
            renderItem={({item}) => <Task task={item} select={setSelected}/>}
            extraData={tasks}
          />
          {selectedTask!=null ? <UpdateTask task={selectedTask}  select={setSelected}/>:<NewTask />}
        </React.Fragment>
      )}
    </Container>
  );
}
