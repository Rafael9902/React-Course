import { memo } from "react";

//memo se usa para memorizar un componente, se usa para componentes uy grandes y que generen problemas de rendimiento unicamente
//no es muy comun trabajarlo asi
export const Small = ( { value }) => {
    console.log('me volvi a renderizar');
    
  return (
    <small>{ value } </small>
  )
}
