import axios from "axios";

const api =  axios.create({
  baseURL: "https://tasky-codex.herokuapp.com/",
  validateStatus:null
});

export async function getUser() {
  const response = await api.get('/users/');
  return response.data;
}

export async function login(user) {
  const response = await api.post('users/login', user);
  return response.data;
}

export async function register(user) {
  const response = await api.post('users/register',user);
  return response.data;
}

export async function logout(token) {
  const response = await api.put('users/logout',null,{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}

export async function getTasks(token) {
  const response = await api.get('tasks/',{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}

export async function getTasksSort(token) {
  const response = await api.get('tasks/sort',{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}

export async function createTask(task,token) {
  const response = await api.post('tasks/add/',task,{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}

export async function updateTask(id,task,token) {
  const response = await api.put(`tasks/update/${id}`,task,{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}

export async function deleteTask(id,token) {
  const response = await api.delete(`tasks/remove/${id}`,{headers:{'authorization':`Bearer ${token}`}});
  return response.data;
}