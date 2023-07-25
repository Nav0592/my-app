import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './mycomponents/Login';
import CounterDemo from './mycomponents/CounterDemo';
import NavMenu from './mycomponents/NavMenu';
import CreateBooking from './mycomponents/CreateBooking';
import ViewBooking from './mycomponents/ViewBooking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<NavMenu />}>
      <Route index element={<CreateBooking />}/> 
      <Route path="createbooking" element={<CreateBooking />}/>
      <Route path="viewbooking" element={<ViewBooking />}/>
      <Route path="login" element={<Login />}></Route>
    </Route>
  </Routes>
</BrowserRouter>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
