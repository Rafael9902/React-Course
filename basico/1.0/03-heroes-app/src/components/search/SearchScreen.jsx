import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    searchText: q
  })

  const { searchText } = values;
  const heroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSeach = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSeach}>
            <input
              value={searchText}
              type="text"
              placeholder="search Hero"
              className="form-control"
              name="searchText"
              autoComplete='off'
              onChange={handleInputChange}
            />

            <button className='btn btn-primary mt-1' type="submit">search</button>
          </form>   
        </div>

        <div className="col-7">
          <h4>Result</h4>
          <hr/>

          {heroes && heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))}
        </div>

      </div>
    </>
  );
};
