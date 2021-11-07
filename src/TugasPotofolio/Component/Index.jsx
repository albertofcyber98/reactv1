import React from "react";
import Navbars from "./Navbars";
import HeaderMain from "./HeaderMain";
import About from "./About";

export default class Component extends React.Component{
    render(){
        return(
            <div>
                <Navbars/>
                <HeaderMain/>
                <About/>
            </div>
        )
    }
}