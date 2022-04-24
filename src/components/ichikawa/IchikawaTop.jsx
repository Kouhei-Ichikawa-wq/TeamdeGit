import { CounterHook } from './CounterHook.jsx';
import { Kaihatsu } from './Kaihatsu.jsx';

export const IchikawaTop = () =>{
    return(
        <>
            <span>ビンゴ</span>
            <CounterHook/>
            <Kaihatsu/>
        </>
    );
}