import React from "react";
import { FcBusinessman, FcLock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import '../Login/index.css'


function Login() {
    const navigate = useNavigate();
        
    function Menu() {
         navigate('/menu')
        }
    return (
        <div className="container">
           
            <div className="img">
                <img src="src/assets/imgsecurity.svg" alt="" />               
            </div>
           
            <div className="container-login">
          
                <form action="" className="sign-in-form">
                    <img src="src/assets/brand.png" alt="" />
                    <h2 className="title">IC Security</h2>

                    <div className="input-field">
                        <div className="i"><FcBusinessman/></div>
                        <input type="text" placeholder="Username" />
                    </div>
                    <i></i>
                    <div className="input-field">
                        <div className="i"><FcLock /></div>
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit" value="Login" onClick={Menu} className="btn" >Login</button>              
                                
                </form>
               
            </div>
            <footer>            
                  <p>Copyright ©2022 All rights reserved</p>
                 
                 
            </footer>
            

        </div>





    )

}

export default Login;