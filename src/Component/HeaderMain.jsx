import React from "react";

export default class HeaderMain extends React.Component{
    render(){
        return(
            <div className="HeaderMain">
                <h4>Welcome</h4>
                <h3>I'm A Fullstack Web <br/> Developer</h3>
                <div className="buttonHire">
                    <a>Hire Me</a>
                </div>
            </div>
        )
    }
}