import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes(publisher)) {
      throw new Error(`${publisher} Is not a valid publisher`);
  }

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      <h1>Hero List</h1>

        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero}></HeroCard>
        ))}
    </div>
  );
};
