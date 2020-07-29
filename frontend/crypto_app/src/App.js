import React from "react";
import './css/style.css';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AccountPage from "./components/pages/AccountPage";

export default function App() {
    return(
        <div className={'ui container'}>
            <Route path='/' exact component={HomePage} />
            <Route path='/account' exact component={AccountPage} />
        </div>
    );
}
