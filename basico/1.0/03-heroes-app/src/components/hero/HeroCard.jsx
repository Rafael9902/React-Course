import React from "react";
import { Link } from "react-router-dom";

import './hero.css';

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagPath = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <img
            src={`/assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        {superhero} {id}
        <Link to={`/hero/${id}`}>
          About...
      </Link>
      </div>
     
    </div>
  );
};
