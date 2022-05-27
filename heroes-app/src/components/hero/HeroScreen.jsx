import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroScreen = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroesById(id), [id]);



  if(!hero) {
    return <Navigate to='/' />;
  }   

  return <div>{hero.superhero}</div>;
};
