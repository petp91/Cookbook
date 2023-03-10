import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchInputGroup from "./SearchInputGroup";

const AdvancedSearch = ({ show, defaultQuery }) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState(defaultQuery);

    const submitHandler = (event) => {
        event.preventDefault();
        navigate(`/recipe?q=${searchInput}`);
    }

    return (
        <Form onSubmit={submitHandler} style={{ display: show ? 'block' : 'none' }} className='p-5'>
            <SearchInputGroup value={searchInput} onChangeHandler={setSearchInput}/>
        </Form>
    )
}

export default AdvancedSearch;
