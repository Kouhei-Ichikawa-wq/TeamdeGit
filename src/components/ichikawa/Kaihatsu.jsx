import { useEffect, useState } from "react";
import { ulid } from "ulid";
import { useTodo } from "./hooks/UseTodo";


export const Kaihatsu = () => {
    const {todoList} = useTodo();
    const [textAreaValue, setTextAreaValue] = useState("");
 
    console.log("Kaihatsu");
    console.log(todoList);

    const ListItem = todoList.map((item) =>(
        <li key={item.id}>{item.content}</li>
    ));

    const textAreaChangeHandle = (e) =>{
        setTextAreaValue(e.target.value);
    }
    
    const textOKButtonHandloe = () =>{
        if (textAreaValue === "")
        {
            alert("空白はさすがに・・・");
        }else{
            let bonge= {
                "id":ulid(),
                "content":textAreaValue,
                "done":false
            }
            // setTodoList([...todoList, bonge]);
            setTextAreaValue("");
        }
    }

    return(
        <>
            <h1>TODO進捗管理</h1>
            <textarea onChange={textAreaChangeHandle} value={textAreaValue}/>
            <button onClick={textOKButtonHandloe}>TODOを追加</button>
            {
                <ul>{ListItem}</ul>
            }
        </>
    );
};