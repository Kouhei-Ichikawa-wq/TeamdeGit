export const TodoItem = ({todo,toggleTdoListItemStatus, deleteTodoListItem}) =>{
    const handleToggleTdoListItemStatus = () =>{
        toggleTdoListItemStatus(todo.id, todo.done);
    };

    const handleDeleteTodoListItem = () =>{
        deleteTodoListItem(todo.id);
    };

    return (
        <li>
            {todo.content}
            <button onClick={handleToggleTdoListItemStatus}>{todo.done ? "未完了リスト":"完了リスト"}</button>
            <button onClick={handleDeleteTodoListItem}>削除</button>
        </li>
    );
};