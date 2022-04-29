import { useEffect, useState } from "react";
import { ulid } from "ulid";
import * as todoData from "../api/apitodos";

export const useTodo = () =>{
    const [todoList , setTodoList] = useState([]);

    useEffect(()=>{
        todoData.getAllTodoData().then((todo)=>{
            setTodoList([...todo].reverse());
        });
    },[]);

    const toggleTdoListItemStatus = (id, done) =>
    {
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = {...todoItem, done: !done};

        todoData.updateTodoData(id,newTodoItem).then((updatedTodo) =>{
            const newTodoList = todoList.map((todo)=> (
                todo.id !== updatedTodo.id ? todo:updatedTodo
            ));
            setTodoList(newTodoList);
        });
    };

    const addTodoListItem = (todoContent) =>{
        const newTodoIem = {
            id : ulid(),
            content : todoContent,
            done : false
        };

        return todoData.addTodoData(newTodoIem).then((addTodo) =>{
            setTodoList([addTodo, ...todoList]);
        });
    };

    const deleteTodoListItem = (id) =>{
        todoData.delTodoData(id).then((deleteid) =>{
            const newTodoList = todoList.filter(
                (todo) =>(todo.id !== deleteid)
            );
            setTodoList(newTodoList);
        });
    };

    return{
        todoList,
        toggleTdoListItemStatus,
        addTodoListItem,
        deleteTodoListItem
    };
}