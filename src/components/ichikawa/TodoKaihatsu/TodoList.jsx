import { List } from "@chakra-ui/react";

import {TodoTitle} from "./TodoTitle";
import {TodoItem} from "./TodoItem"

export const TodoList = ({todolist, toggleTdoListItemStatus, deleteTodoListItem, title, as, fontSize}) =>{
    return(
        <>
            {todolist.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} fontSize={fontSize} mt="12"/>
                    <List w="full">
                        {todolist.map((todo) =>(
                            <TodoItem 
                                todo={todo}
                                key={todo.id}
                                toggleTdoListItemStatus={toggleTdoListItemStatus} 
                                deleteTodoListItem={deleteTodoListItem} 
                            />
                        ))}
                    </List>
                </>
            )}
        </>
    );
};