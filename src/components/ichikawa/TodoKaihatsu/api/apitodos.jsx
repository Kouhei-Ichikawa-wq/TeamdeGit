import axios from "axios";
const todoUrl = "http://localhost:3001/todos";

export const getAllTodoData = async() =>{
    const response = await axios.get(todoUrl);
    return response.data;
}

export const addTodoData = async(todo) =>{
    const response = await axios.post(todoUrl, todo);
    return response.data;
}

export const delTodoData = async(id) =>{
    await axios.delete(`${todoUrl}/${id}`);
    return id;
}

export const updateTodoData = async(id, todo) =>{
    const response = await axios.put(`${todoUrl}/${id}`,todo);
    return response.data;
}