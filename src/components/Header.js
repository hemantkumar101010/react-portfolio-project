import React from "react"
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>programmers community on instagram</h1>
                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "Promotional Ads", "Social Media Marketing"]}
                typeSpeed={40}
                backSpeed={100}
                loop
                />
                <a href="a" className="btn-main-offer"> Contact Me </a>
            </div>
        </div>
    )
}

export default Header;