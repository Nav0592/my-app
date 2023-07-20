import "bootstrap/dist/css/bootstrap.min.css";

import logo from './logo.svg';
import './App.css';
import './mycomponents/Login'
import { useState } from "react";


import CreateBooking from './mycomponents/CreateBooking';
import ViewBooking from './mycomponents/ViewBooking';
import NavMenu from './mycomponents/NavMenu';
import CounterDemo from "./mycomponents/CounterDemo";

function App() {
 const [showForm, setShowForm] = useState(true)
  return(
    <>
      <NavMenu setShowForm={setShowForm}/>
      {(showForm == true) ? <CreateBooking /> : <ViewBooking />}
    </>
    );
}

export default App;
