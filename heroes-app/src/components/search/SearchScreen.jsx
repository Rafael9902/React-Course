import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const [values, handleInputChange, reset] = useForm({
    searchText: ''
  })

  const { searchText } = values;
  const heroes = getHeroesByName(searchText);

  const handleSeach = (e) => {
    e.preventDefault();
    console.log(searchText);
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

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero}/>
          ))}
        </div>

      </div>
    </>
  );
};
