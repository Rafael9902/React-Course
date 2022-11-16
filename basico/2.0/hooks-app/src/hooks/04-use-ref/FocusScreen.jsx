import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

 
  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input ref={ inputRef } type='text' placeholder='name'/>
        <input type='text' placeholder='name2'/>

        <button onClick={handleClick}>Set Focus</button>
    </>
  )
}
