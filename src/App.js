import "./App.css";
import React from "react";
import SearchFilter from "./components/Search/SearchFilter";
import Login from "./components/Login";
import Home from "./components/Home";
import ItemList from "./components/ItemsList/ItemList";
import * as ROUTES from "./components/constants/routes";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SingleItem from "./components/SingleItem";
import Signup from "./components/signup/SignUp";
import Addtocart from "./components/AddToCart/AddToCart";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Home />} />
        <Route path={ROUTES.SIGN_IN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route path={ROUTES.ITEM_LIST} element={<ItemList />} />
        <Route path={ROUTES.SEARCH} element={<SearchFilter />} />
        <Route path={ROUTES.ADDCART} element={<Addtocart />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={`${ROUTES.SINGLE_ITEM}/:id`} element={<SingleItem />} />
      </Routes>
    </Router>
  );
}

export default App;
