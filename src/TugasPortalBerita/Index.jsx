import React from "react";
import Artikels from "./Artikels";
import Navbars from "./Navbars";

export default class TugasPortalBerita extends React.Component{
    render(){
        return(
            <div>
                <Navbars/>
                <Artikels/>
            </div>
        )
    }
}