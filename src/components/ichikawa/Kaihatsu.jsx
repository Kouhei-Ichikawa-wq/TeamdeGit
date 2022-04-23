import axios from "axios";
import { useEffect, useState } from "react";

const todoUrl = "http://localhost:3001/todos";

export const Kaiatsu = () => {
    const [todoList , setTodoList] = useState([]);

    
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await axios.get(todoUrl);
            setTodoList(response.data);
        };
        fetchData();
    },[]);

    const ListItem = todoList.map((item) =>(
        <li key={item.id}>{item.content}</li>
    ));


    return(
        <>
            <h1>TODO進捗管理</h1>
            <textarea/>
            <button>TODOを追加</button>
            <ul>
                {
                    ListItem
                /* {todoList.map((todo)=>(
                    <li key={todo.id}>{todo.content}</li>
                ))} */}
            </ul>
        </>
    );



};