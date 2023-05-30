import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

//NAVBAR
import NavBar from "./components/NavBar";
import "./layout/NavBar.css";

// FOOTER
import Footer from "./components/Footer";
import "./layout/Footer.css";

import './layout/nested_modals_fix.css';
import { DataProvider } from "./providers/DataProvider";

const App = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <div>
                    <NavBar />
                </div>
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                    <Route path="/recipes" element={ <RecipesPage /> } />
                    <Route path="/about" element={ <AboutPage /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
                <div>
                    <Footer />
                </div>
            </DataProvider>
        </BrowserRouter>
    );
};

export default App;