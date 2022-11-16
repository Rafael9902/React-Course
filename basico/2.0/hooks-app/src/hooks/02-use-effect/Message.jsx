import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0});

    //el useeffect tiene 3 valores
    //el primero es el callback dode va a ir la lógica cuando se monte el efecto
    // el segundo es el return donde irá la lógica cuando se desmonte el efecto
    // dependencias, indica cuando se tiene que ejecutar el effect, si es un rray vacio se ejecuta solo una vez al montar
 useEffect(() => {
     const onMouseMove = ( { x, y } ) => setCoords({x, y});

     window.addEventListener('mousemove', onMouseMove);
    
     return () => window.removeEventListener('mousemove', onMouseMove)
 }, []);

  return (
      <div>Message</div>
  )
}
