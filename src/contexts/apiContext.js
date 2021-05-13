import React, {createContext, useState, useContext, useEffect} from 'react';
import * as api from '../services/api';

const ApiContext = createContext({
  tasks: [],
  addTask: task => {},
  updateTask: (id,task) => {},
  deleteTask: (id,task) => {},
  loading: false,
  refreshTasks: () => {},
  user: {},
  login: user => {},
  register: user => {},
  logout: () => {}
});

export function ApiContextProvider({children}) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState(null);

  const refreshTasks = async () => {
    setLoading(true);

    if (user){
      const token = user.token_list[0];
      const tasks = await api.getTasks(token);
      setTasks(tasks);
    }
    
    setLoading(false);
  };

  const addTask = async task => {
    setLoading(true);

    const token = user.token_list[0];
    const response = await api.createTask(task,token);

    await refreshTasks();

    return response;
  };

  const updateTask = async (id,task) => {
    setLoading(true);

    const token = user.token_list[0];
    await api.updateTask(id,task,token);

    await refreshTasks();
  };

  const deleteTask = async (id,user) => {
    setLoading(true);

    const token = user.token_list[0];
    await api.deleteTask(id,token);

    await refreshTasks();
  };

  const login = async user => {
    setLoading(true);

    const response = await api.login(user);
    setUser(response);

    setLoading(false);

    return response;
  }

  const register = async user => {
    setLoading(true);

    const response = await api.register(user);
    setUser(response);

    setLoading(false);

    return  response;
    
  };

  const logout = async () => {
    setLoading(true);

    const token = user.token_list[0];
    const response = await api.logout(token);
    
    setLoading(false);

    return response;
  };

  return (
    <ApiContext.Provider
      value={{tasks, loading, user, refreshTasks, addTask, updateTask, deleteTask, 
      login, register, logout}}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  return context;
}