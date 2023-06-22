import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{Mypara,Mylist} from './App';
import Greeting from './greeting';
import reportWebVitals from './reportWebVitals';
import { add,sub,div,mul } from './calc';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greeting/>
    <Mypara/>
    <Mylist/>
    <ol>
      <li>Addition of {add(1,3)}</li>
      <li>Subtraction of {sub(9,3)}</li>
      <li>Division of {div(10,2)}</li>
      <li>Multiplication of {mul(11,3)}</li>
    </ol>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
