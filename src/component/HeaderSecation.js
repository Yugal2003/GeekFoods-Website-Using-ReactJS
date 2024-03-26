import React from "react";
import './HeaderSecation.css'
import img from '../Img/logo.png';
import Button from "./Button";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

 // contact Link karvanu 

const HeaderSecation = () =>{
    return(
        <>
            {
                // header section start
                <div className="header_section">

                    <div className="div1">
                        <img src={img} alt="Logo"height="35px" width="35px" />
                        <h2 className="h2">GeekFoods</h2>
                    </div>

                    <div className="div2">
                        <ul className="links">
                            <NavLink className="navlink" to="/Home" >Home</NavLink>
                            <NavLink className="navlink" to="/Quote" >Quote</NavLink>
                            <NavLink className="navlink" to="/Resturants" >Resturants</NavLink>
                            <NavLink className="navlink" to="/Foods" >Foods</NavLink>
                            <NavLink className="navlink" to="/Contact" >Contact</NavLink>
                        </ul>
                    </div>

                    <Button fontfamily={"Segoe UI"} cursor={"pointer"} fontsize={"14px"} fontweight={"500"} color={"white"} backgroundColor= {"#2155c6"} border={"none"} padding={"0.5rem 1.2rem"} borderradius={"8px"} >Get started</Button>
                </div>
            }
        </>
    );
}

export default HeaderSecation;
