import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Edureg from "./Component/Edureg";
import UserId from "./Component/UserId";
import Home from "./Component/inside/Home";
import Forgt from "./Component/forget Password/Forgt";
import ForgtPass from "./Component/forget Password/ForgtPass";
import Profile from "./Component/inside/Profile";
import Layout from "./Component/inside/Layout";
import Error from "./Component/Error";
import Help from "./Component/inside/Help";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/"></Route>
          <Route element={<Layout />} path="/:abc/home">
            <Route element={<Home />} path=""></Route>
            <Route element={<Profile />} path="profile"></Route>
            <Route element={<Help />} path="help"></Route>
          </Route>
          <Route element={<ForgtPass />} path="/ForgtPass/:xyz"></Route>
          <Route element={<Forgt />} path="/forget"></Route>
          <Route element={<Register />} path="/:abc/register" />
          <Route element={<Edureg />} path="/:xyz/register/educations" />
          <Route element={<UserId />} path="/createuser" />
          <Route element={<Error />} path="*"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
