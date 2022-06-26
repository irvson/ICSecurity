import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom"

import Login from './pages/Login/PageLogin'
import Menu from './pages/Menu/PageMenu'
import Registre from './pages/Registre/addUser'

import ListUser from './pages/List/listUser'
import Delete from './pages/Delete/deleteUser'



function RouteLink(){
return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}  />
    <Route path="/menu" element={<Menu/>}  />
    <Route path="/registre" element={<Registre/>}  />
    <Route path="/list" element={<ListUser/>}  />
    <Route path="/delete" element={<Delete/>}  />
    
    </Routes>
    </BrowserRouter>
)

}


export default RouteLink;