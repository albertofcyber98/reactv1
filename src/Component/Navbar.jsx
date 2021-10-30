import React from "react";

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbarComponent">
                <nav>
                    <ul>
                        <li><a>Profil</a></li>
                        <li><a>About</a></li>
                        <li><a>Portofolio</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Team</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}