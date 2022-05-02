import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

import FirstApp from "./FirstApp";
import CounterApp from "./components/CounterApp/CounterApp";

const divRoot = document.querySelector('#root');

ReactDOM.render(<FirstApp greet="Goku" />, divRoot)
//ReactDOM.render( <CounterApp value={9}/>, divRoot)

