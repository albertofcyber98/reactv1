import React from "react";
import Navbar from "./Navbar";
import HeaderMain from "./HeaderMain";
import About from "./About";

export default class Component extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <HeaderMain/>
                <About/>
            </div>
        )
    }
}