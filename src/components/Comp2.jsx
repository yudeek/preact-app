import { useState } from 'preact/hooks'

export function Comp2(){
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return(
    <>
      <button onClick={increment}>Click {counter}</button>
    </>
  )
  // return <button onClick={setCounter(counter + 1)}>Click {counter}</button>
}
