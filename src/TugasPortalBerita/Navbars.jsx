import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavbarText } from "reactstrap";

export default class Navbars extends React.Component{
    render(){
        return(
                <Navbar
                    color="success"
                    dark
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                    Yohanes Albert
                    </NavbarBrand>
                    <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        
                    </Nav>
                    <NavbarText>
                        Portal Berita
                    </NavbarText>
                    </Collapse>
                </Navbar>
        )
    }
}