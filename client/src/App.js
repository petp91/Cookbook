import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";


const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/recipe" element={ <RecipePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
            <div>
                Footer
            </div>
        </BrowserRouter>
    );
};

export default App;