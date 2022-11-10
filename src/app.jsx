import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'
import { Hello } from './components/Hello.jsx';
import { Comp1 } from './components/Comp1.jsx';
import { Comp2 } from './components/Comp2.jsx';

export function App() {
  const clickEvent = e => console.log(e);

  const el = <p onClick={clickEvent}>test</p>;
  const el2 = <p onClick={e => console.log(e)}>test2</p>;

  const onChangeEvent = d => console.log(d);

  return (
    <>
      <input onChange={onChangeEvent} type="text" placeholder="name" />
      { el }
      { el2 }
      <Hello name={'Ivan'} />
      <Comp1>we are here!</Comp1>
      <Comp2></Comp2>
    </>
  )
}
