import {TodoTitle} from "./TodoTitle";
import {TodoItem} from "./TodoItem"

export const TodoList = ({todolist,toggleTdoListItemStatus, deleteTodoListItem,title,as}) =>{
    return(
        <>
            {todolist.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} />
                    <ul>
                        {todolist.map((todo) =>(
                            <TodoItem 
                                todo={todo} 
                                toggleTdoListItemStatus={toggleTdoListItemStatus} 
                                deleteTodoListItem={deleteTodoListItem} 
                                key={todo.id}
                            />
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};