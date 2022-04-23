import { CounterHook } from './CounterHook.jsx';
import { Kaiatsu } from './Kaihatsu.jsx';

export const IchikawaTop = () =>{
    return(
        <>
            <span>ビンゴ</span>
            <CounterHook/>
            <Kaiatsu/>
        </>
    );
}