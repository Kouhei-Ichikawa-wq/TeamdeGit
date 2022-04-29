import { useRef } from "react";
import { useTodo } from "./hooks/UseTodo"
import { TodoTitle } from "./TodoTitle";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

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
        <>
            <TodoTitle title="TODO進捗" as="h1" />
            <TodoAdd inputEl={inputEl} hanldAddTodoListItem={textOKButtonHandloe} />

            <TodoList 
                title="未完TODOリスト" as="h2"
                todolist={inCompletedList} 
                toggleTdoListItemStatus={toggleTdoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
            />

            <TodoList 
                title="完了TODOリスト" as="h2"
                todolist={completedList} 
                toggleTdoListItemStatus={toggleTdoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
            />

        </>
    );
};