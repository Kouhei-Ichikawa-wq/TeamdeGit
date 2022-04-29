import { CounterHook } from './CounterHook.jsx';
import { TodoKaihatsu } from './TodoKaihatsu/TodoKaihatsu.jsx';

export const IchikawaTop = () =>{
    return(
        <>
            <span>ビンゴ</span>
            <CounterHook/>
            <TodoKaihatsu/>
        </>
    );
}