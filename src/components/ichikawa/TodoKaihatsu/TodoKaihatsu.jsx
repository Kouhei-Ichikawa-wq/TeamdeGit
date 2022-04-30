import { useRef } from "react";

import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodo } from "./hooks/UseTodo"
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "@chakra-ui/react";


export const TodoKaihatsu = () => {
    const {todoList,
        addTodoListItem,
        toggleTdoListItemStatus,
        deleteTodoListItem,
    } = useTodo();

    const inputEl = useRef(null);

    const textOKButtonHandloe = () =>{
        if (inputEl.current.value === "")
        {
            alert("空白はさすがに・・・");
        }else{
            addTodoListItem(inputEl.current.value);
            inputEl.current.value = "";
        }
    }

    const inCompletedList = todoList.filter((todo)=>{
        return !todo.done;
    });

    const completedList = todoList.filter((todo)=>{
        return todo.done;
    });    

    return(
        <ChakraProvider thema={theme}>
            <Container centerContent ={{base:"4", md:"6"}} maxWidth="3xl">
                <TodoTitle title="TODO進捗" as="h1" fontSize={{base:"2xl", md:"3xl"}} />
                <TodoAdd  placeholder="ADD TODO" leftIcon={<AddIcon />} buttonText="TODOを追加" inputEl={inputEl} hanldAddTodoListItem={textOKButtonHandloe} />

                <TodoList 
                    title="未完TODOリスト" as="h2"
                    todolist={inCompletedList} 
                    toggleTdoListItemStatus={toggleTdoListItemStatus}
                    deleteTodoListItem={deleteTodoListItem}
                    fontSize={{base:"xl", md:"2xl"}}
                />

                <TodoList 
                    title="完了TODOリスト" as="h2"
                    todolist={completedList} 
                    toggleTdoListItemStatus={toggleTdoListItemStatus}
                    deleteTodoListItem={deleteTodoListItem}
                    fontSize={{base:"xl", md:"2xl"}}
                />
            </Container>
        </ChakraProvider>
        
    );
};