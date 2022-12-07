import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import "./App.css"
const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <NavLink style={{textDecoration: "none"}} to='/users'>
                    <button className="btn">Users</button>
                </NavLink>
                <NavLink style={{textDecoration: "none"}} to='/todos'>
                    <button className="btn">Todos</button>
                </NavLink>
            </div>
            <Routes>
                <Route path='/users' element={<UsersPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
                <Route path='/users/:id' element={<UserItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;