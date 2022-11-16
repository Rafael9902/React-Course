import { Counter } from "./counter/Counter";
import {CounterBy} from "./counter-by/CounterBy";

export const App = () => {
  return (
		<>
            <Counter initialValue={ 15 }/>
            <CounterBy />
		</>
  )
}
