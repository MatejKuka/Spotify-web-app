import {Route, Routes, Navigate} from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import NotFoundPage from "./pages/NotFoundPage";
import SongLyricsPage from "./pages/SongLyricsPage";
import SongsPage from "./pages/SongsPage";
import Navigation from "./components/UI/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";



function App() {
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/song-list" element={<SongsPage/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/song-list/:songId" element={<SongLyricsPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
