// Hooks

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

// Son funciones y se nombra con el prefijo use como un estandar, no como una obligacion
export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => setState({
             data: imgs,
             loading: false
        }))
    }, [ category ])

    return state;
}
