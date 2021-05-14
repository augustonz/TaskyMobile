import React, {useEffect, useState} from 'react';
import Title from '../../components/Title';
import {useApiContext} from './../../contexts/apiContext';
import Task from './components/Task';
import NewTask from './components/NewTask';
import UpdateTask from './components/UpdateTask';
import {Container, Header, LoadingIcon, List} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';

export default function Tasks({navigation}) {
  const {tasks, refreshTasks, loading, sortPriority,setSorting} = useApiContext();

  const [selectedTask,setSelected] = useState(null);

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <Container>
      <Header>
        <Title text="Minhas Tasks" />
      </Header>
      <ToggleSwitch
            isOn={sortPriority}
            onColor="green"
            offColor="red"
            label="Ordenar por prioridade:"
            labelStyle={{color: '#636363', fontWeight: '900', fontSize: 16}}
            size="small"
            onToggle={isOn => setSorting(isOn)}
        />
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
