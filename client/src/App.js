import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

import NavBar from "./components/menu/NavBar";
import Footer from "./components/menu/Footer";

import { DataProvider } from "./providers/DataProvider";

import './layout/nested_modals_fix.css';

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