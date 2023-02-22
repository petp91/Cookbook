import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/recipe" element={ <RecipePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
        </Routes>
    );
};

export default App;