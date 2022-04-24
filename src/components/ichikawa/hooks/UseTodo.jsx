import { useEffect, useState } from "react";
import { ulid } from "ulid";
import * as todoData from "../api/apitodos";

export const useTodo = () =>{
    const [todoList , setTodoList] = useState([]);

    useEffect(()=>{
        todoData.getAllTodosData().then((todo)=>{
            setTodoList([...todo].reverse());
            console.log(todo);
        });
    },[]);

    const toggleTdoListItemStatus = (id, done) =>
    {
        const todoItem = todoList.find((item) => item.id === id);
        const newTodoItem = {...todoItem, done: !todoItem.done};

        todoData.udateTodosData(id,newTodoItem).then((updatedTodo) =>{
            const newTodoList = todoList.map((todo)=> (
                todo.id = updatedTodo.id ? todo:updatedTodo
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

        return todoData.addTodosData(newTodoIem).then((addTodo) =>{
            setTodoList([addTodo, ...todoList]);
        });
    };

    const deleteTodoListItem = (id) =>{
        todoData.delTodosData(id).then((deleteid) =>{
            const newTodoList = todoList.filter((todo) =>(
                todo.item !== deleteid
            ));
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