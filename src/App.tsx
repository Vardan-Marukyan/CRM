import React from 'react';
import './App.css';
import {PrivateRoutes} from "./components/PrivateRoutes/PrivateRoutes";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Auth} from "./components/Auth/Auth";
import {Home} from "./components/Home/Home";
import {Customers} from "./components/Customers/Customers";
import {EditCutomer} from "./components/EditCutomer/EditCutomer";


function App() {
  return (
     <Router>
          <Routes>
              <Route path="/" element={<Auth/>}/>
              <Route element={<PrivateRoutes/>}>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/customers" element={<Customers/>}/>
                  <Route path={"/cutomer/:id"} element={<EditCutomer/>}/>
              </Route>
          </Routes>
     </Router>
  );
}

export default App;
