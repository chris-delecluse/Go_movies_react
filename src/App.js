import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import P_home from "./pages/p_home";
import P_movies from "./pages/p_movies";
import P_about from "./pages/p_about";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<P_home/>}/>
                <Route path="/movies" element={<P_movies/>}/>
                <Route path="/about" element={<P_about/>}/>
                <Route path="*" element={<P_home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
