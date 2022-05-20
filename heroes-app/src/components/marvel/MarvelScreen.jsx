import React from 'react'
import { HeroesList } from '../hero/HeroesList'

export const MarvelScreen = () => {
  return (
    <section>
        <h1>Marvel Screen</h1>

        <HeroesList publisher='Marvel Comics'/>
    </section>
  )
}
