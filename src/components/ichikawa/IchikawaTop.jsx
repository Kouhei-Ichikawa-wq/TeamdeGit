import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Link } from "react-router-dom";
import { CounterHook } from './CounterHook.jsx';
import { TodoKaihatsu } from './TodoKaihatsu/TodoKaihatsu.jsx';

export const IchikawaTop = () =>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={
                        <>
                        <h1>メニュー選択</h1>
                            <nav>
                                <ul>
                                    <li><Link to="Shinchoku">Sample Page1</Link></li>
                                    <li><Link to="Counter">Sample Page2</Link></li>
                                </ul>
                            </nav>
                        </>       
                    }/>
                    <Route path="shinchoku" element={
                        <>
                            <Link to="/">Topへ戻る</Link>
                            <Shinchoku/>
                        </>
                    } />
                    <Route path="counter" element={
                        <>
                            <Link to="/">Topへ戻る</Link>
                            <Counter/>
                        </>
                    } />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

const Shinchoku = () =>{
    return(
        <TodoKaihatsu/>
    );
}

const Counter = () =>{
    return(
        <CounterHook/>
    );
}

const NotFound = () =>{
    return(
        <>
            <h1>ページが見つかりませんでした</h1>
            <li><Link to="/">Topへ戻る</Link></li>
        </>
    );
}
