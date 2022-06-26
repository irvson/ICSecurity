import React, {  useState }  from "react";
import { Link } from "react-router-dom";
import RouteLink from "../../routes";
/*==============Icons======================================  */
import { MdArrowForwardIos } from "react-icons/md";
import { AiFillHome, AiOutlineSearch, AiOutlineUserAdd, AiOutlineOrderedList } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CgLogOff } from "react-icons/cg";
/*==========================================================  */

import '../Menu/sidebar.css'




function Menu() {
        const [active , setActive] = useState(false)
         
            
    return (

        <nav className={active ? 'sidebar close':'sidebar'} id="sidebar">
            <header>
                <span className="image-header">
                    <img src="src/assets/brand.png" alt="" />
                   <span className="li-text"> IC Security </span>
                </span>
                <MdArrowForwardIos className="icon-header" cursor={"pointer"} onClick={()=> setActive(!active)} /> 
            </header>

            <div className="menu-bar">
                <div className="menu">
                    
                    <li className="search">                                       
                        <AiOutlineSearch className="search-icon" />                       
                        <input 
                        type="search" 
                        placeholder="Search..." 
                        id="" />                    
                    </li>

                    <ul className="menu-li">
                        <li className="nav-li">
                        <Link to={"/registre"}>
                                <AiOutlineUserAdd className="icon" name="register" />
                                <span className="li-text">Cadastrar</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="menu-li">
                        <li className="nav-li">
                            <Link to={"/list"}>
                                <AiOutlineOrderedList className="icon" name="list" />
                                <span className="li-text">Listar</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="menu-li">
                        <li className="nav-li">
                        <Link to={"/delete"}>
                                <RiDeleteBin6Fill className="icon" name="del" />
                                <span className="li-text">Deletar</span>
                            </Link>
                        </li>
                    </ul>

                    <ul className="menu-li">
                        <li className="nav-li">
                        <Link to={"/"}>
                                <CgLogOff className="icon logoff" name="logoff" />
                                <span className="li-text">Logoff</span>
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>

    )
}
export default Menu;










/*

  <div className="create-crud-security">
           
            <aside className="sidebar">

                <img src="src/assets/brand.png" alt="Logo" />

                <footer>
                    <a href="/">
                    <img src="src/assets/arrow-left.png" alt="arrow-left" />
                    </a>
                </footer>

            </aside>
<div className="btn">

    <button type="submit" className=""></button>
    <button type="submit" className=""></button>
    <button type="submit" className=""></button>
</div>
        </div>
    )

*/