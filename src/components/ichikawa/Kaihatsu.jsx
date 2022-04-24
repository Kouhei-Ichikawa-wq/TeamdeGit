import axios from "axios";
import { useEffect, useState } from "react";
import { ulid } from "ulid";
import { useCounter } from "./CounterHook";

const todoUrl = "http://localhost:3001/todos";

export const Kaiatsu = () => {
    const [textAreaValue, setTextAreaValue] = useState("");
    const [todoList , setTodoList] = useState([]);
    const [axiosError, setAxiosError] = useState(true);

    const {count,countUpHandle,countResetHandle}  = useCounter(0);

    
    useEffect(()=>{
        const fetchData = async(error) =>{
            try{
                const response = await axios.get(todoUrl);
                setTodoList(response.data);
                setAxiosError(false);
                console.log(`SUCEESS:${response}`);
            }catch(error){
                console.log(`ERROR:${error}`);
                setAxiosError(true);
            }
        };
        fetchData();
    },[]);

    const ListItem = todoList.map((item) =>(
        <li key={item.id}>{item.content}</li>
    ));

    const countWrapper = () =>{
        countUpHandle();
        if(count === 5){
            setAxiosError(false);
        }else{
            setAxiosError(true);
        }
    };

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
            setTodoList([...todoList, bonge]);
            setTextAreaValue("");
        }
    }

    return(
        <>
            <h1>TODO進捗管理</h1>
            <textarea onChange={textAreaChangeHandle} value={textAreaValue}/>
            <button onClick={textOKButtonHandloe}>TODOを追加</button>

            {
                axiosError === false ? <ul>{ListItem}</ul>:<span><br/><br/>『json-server -w .\db.json -p 3001』やってますか？</span>
            }
            <span><br/>カウント数：{count}</span>
            <button onClick={countWrapper}>カウント</button>
            <button onClick={countResetHandle}>リセット</button>
        </>
    );



};