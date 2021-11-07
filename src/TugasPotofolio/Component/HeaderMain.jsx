import React from "react";
import styled from "styled-components";

const Link = styled.a`
    border: 2px solid #FF9900;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px 30px;
    font-weight: 400;
    text-decoration: none;
    &:hover{
        color: white;
        font-size: 18px;
        border: 3px solid #FF9900;
        cursor: pointer;
    }
`;
export default class HeaderMain extends React.Component{
    render(){
        return(
            <div className="HeaderMain">
                <h4>Welcome</h4>
                <h3>I'm A Fullstack Web <br/> Developer</h3>
                <div className="buttonHire">
                    <Link>Hire Me</Link>
                </div>
            </div>
        )
    }
}