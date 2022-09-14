import "../../styles/navigation.scss";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <header className={"header"}>
            <div className={"logo"}>RLA - React Lyrics App</div>
            <nav className={"nav"}>
                <ul>
                    <li>
                        <NavLink to='/song-list' className={(navData) => navData.isActive ? "active" : ""}>
                            All Songs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={(navData) => navData.isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Navigation;