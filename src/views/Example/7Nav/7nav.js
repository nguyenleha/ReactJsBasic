import React from "react";
import "./nav.scss"

class Nav7 extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">

                    <a className="active" href="/">Home</a>
                    <a href="/Testleha">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </>
        )
    }
}
export default Nav7;