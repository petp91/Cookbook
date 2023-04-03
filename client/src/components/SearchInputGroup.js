import { FormControl, Button, InputGroup } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const SearchInputGroup = ({ value, onChangeHandler }) => {
    return (
        <InputGroup>
            <FormControl type='text' placeholder='Search for a recipe' value={value} onChange={e => onChangeHandler(e.target.value)}/>
            <Button className='pt-1 pb-1 ps-2 pe-2' variant='secondary' type='submit'>
                <Icon path={mdiMagnify} size={1} />
            </Button>
        </InputGroup>
    )
}

export default SearchInputGroup;
