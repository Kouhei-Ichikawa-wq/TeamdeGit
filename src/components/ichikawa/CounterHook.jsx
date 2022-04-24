import { useState } from "react";


export const useCounter = (initialCount) =>{
    const [count, setCount] = useState(initialCount);

    //1ずつアップ
    const countUpHandle = () =>{
        setCount(count+1);
    };

    //1ずつダウン
    const countDownHandle = () =>{
        setCount(count-1);
    };

    //リセット
    const countResetHandle = () =>{
        setCount(initialCount);
    };

    return {count,countUpHandle,countDownHandle,countResetHandle};
}



export const CounterHook = () =>{
    const INITIAL_COUNT = 0;
    const {count,countUpHandle,countDownHandle,countResetHandle} = useCounter(INITIAL_COUNT);

    const CounterText = (props) =>{
        return(
            <p>現在のカウント数:{props.count}</p>
        );
    }

    return(
        <>
            <span><CounterText count={count}/></span>
            <button onClick={countUpHandle}>+</button>
            <button onClick={countDownHandle}>-</button>
            <button onClick={countResetHandle}>clear</button>
        </>
    );
}