import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { SatoTop } from './components/sato/SatoTop';
import { WadaTop } from './components/wada/WadaTop';
import { HayashiTop } from './components/hayashi/HayashiTop';

export const App = () => {
  const obj = [
    { id:1, lin:WadaTop,eventName:"和田"},
    { id:2, lin:SatoTop,eventName:"佐藤"},
    { id:2, lin:HayashiTop,eventName:"林"},
  ];

  const [view, setView] = useState(WadaTop);

  const  onClickHandle = (e) =>{
    setView(obj[e.target.value].lin);
    return;
  }

  const objMap = (obj.map((a,index) =>{
    return(
      <span key={a.eventName}>
        <Button variant="text" onClick={onClickHandle} value={index}>{a.eventName}</Button>
      </span>
    );

  }));

  return (
    <>
      <Stack spacing={2} direction="row">
        {objMap}
      </Stack>
      <hr/>
      {view}
    </>
  );
}
