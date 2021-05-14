import React, {useEffect} from 'react';
import Title from '../../components/Title';
import {useApiContext} from './../../contexts/apiContext';
import Task from './components/Task';
import NewTask from './components/NewTask';
import {Container, Header, LoadingIcon, List} from './styles';
import Loading from '../../components/Loading';

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
        <Loading />
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
