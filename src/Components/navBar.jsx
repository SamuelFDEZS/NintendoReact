import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    const navBar = document.querySelector(".nav")
    const [nameOfClass, setNameOfClass] = useState("nav")
    const [scrollTop, setScrollTop] = useState(0)


    window.addEventListener("scroll", () => {
        let { pageYOffset } = window;
        if (pageYOffset > scrollTop) {
            setNameOfClass("nav")
        } else if (pageYOffset < scrollTop) {
            setNameOfClass("nav visible")
        }

        setScrollTop(pageYOffset <= 0 ? 0 : pageYOffset);
    },
        { passive: true }
    );
    return (
        <nav className={nameOfClass}>
            <h1 className="nav-h1"><Link to={'/'}>NintendoApi</Link></h1>
            <ul className="nav-ul">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/vilains'}>Vilains</Link></li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}

export default NavBar;