import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './parent-child/Parent';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoaderWithAPICall from "./api-call-with-loader/LoaderWithAPICall";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/parent" element={<Parent />}></Route>
        <Route path="/loader" element={<LoaderWithAPICall />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
