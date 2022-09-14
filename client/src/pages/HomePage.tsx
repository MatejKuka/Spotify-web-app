import "../styles/homePage.scss"
import {MouseEvent} from "react";
import {useNavigate} from "react-router-dom";



const HomePage = () => {
    const navigate = useNavigate();
    function navigateHandler(event: MouseEvent<HTMLButtonElement>) {
        navigate("/song-list");
    }

    return (
        <div className={"containerHomePageClass"}>
            <div>
                <h1>Find lyrics of your favorite songs</h1>
                <button onClick={navigateHandler}>Find Lyrics</button>
            </div>
        </div>
    );
}

export default HomePage;
