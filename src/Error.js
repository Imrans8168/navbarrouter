import React from "react";
import { NavLink } from "react-router-dom";

const Error =()=>{
    return(
        <><div className="error">
            <h1> 404 Error.. Page not found </h1>
            <NavLink to="/" >Go back</NavLink>
            </div>
        </>
    );
}

export default Error;