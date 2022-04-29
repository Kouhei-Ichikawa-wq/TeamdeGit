export const TodoAdd = ({inputEl, hanldAddTodoListItem}) =>{
    return(
        <>
            <textarea ref={inputEl} />
            <button onClick={hanldAddTodoListItem}>TODOを追加</button>
        </>
    );
};