import { useState } from "react";
const NavBar = () => {
    const navBar = document.querySelector(".nav")
    const [nameOfClass, setNameOfClass] = useState("nav")
    const [scrollTop, setScrollTop] = useState(0)


    window.addEventListener("scroll", () => {
        let { pageYOffset } = window;
        if (pageYOffset > scrollTop) {
            setNameOfClass("nav")
            console.log(scrollTop)
            console.log(nameOfClass)
        } else if (pageYOffset < scrollTop) {
            setNameOfClass("nav visible")
            console.log(nameOfClass)
        }

        setScrollTop(pageYOffset <= 0 ? 0 : pageYOffset);
    },
        { passive: true }
    );
    return (
        <nav className={nameOfClass}>
            <h1 className="nav-h1">NintendoApi</h1>
            <ul className="nav-ul">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}

export default NavBar;