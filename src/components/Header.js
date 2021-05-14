import { Link } from "react-router-dom";
import Nav from "./Nav"

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">LOGO</Link>
            <Nav />
        </header>
    )
}

export default Header