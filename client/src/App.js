import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/form" element={ <FormPage /> } />
        </Routes>
    );
};

export default App;