import React, { Component } from "react";
import styles from "./App.module.scss";
import Header from "./Header";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import EventDesc from "./EventDesc";
import SectionMain from "./SectionMain";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "../pages/MainPage";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={MainPage} />
      <Route path="/users/" component={Users} />
    </Router>
  );
}

export default AppRouter;
