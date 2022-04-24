import axios from "axios";
const todoUrl = "http://localhost:3001/todos";

export const getAllTodosData = async() =>{
    const response = await axios.get(todoUrl);
    return response.data;
}

export const addTodosData = async(todo) =>{
    const response = await axios.post(todoUrl, todo);
    return response.data;
}

export const delTodosData = async(id) =>{
    await axios.delete(`${todoUrl}/${id}`);
    return id;
}

export const udateTodosData = async(id, todo) =>{
    const response = await axios.put(`${todoUrl}/${id}`,todoUrl);
    return response.data;
}