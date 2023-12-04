import { useLocation, useNavigate } from 'react-router';
import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from './mainStyle/searchBoxStyle';
import { useState } from "react";


function Search() {
    let navigate = useNavigate();
    const [inputText, setInputText] = useState('');
    const location = useLocation();

    const searchButtonClick = () => {
        console.log(location);
        if (location.pathname === '/search') {
            navigate('/search', { state: { nickname: inputText } });
            window.location.reload();
        } else {
            navigate('/search', { state: { nickname: inputText } });
        }
    };

    return (
        <BodySearchBox>
            <SearchBox>
                <Box>
                    <Select>
                        <option value="KR">KR</option>
                        <option value="NA">NA</option>
                    </Select>
                    <Input value={inputText} onChange={(e) => { setInputText(e.target.value); }} />
                    <Button onClick={searchButtonClick} >
                        <Img src={`${process.env.PUBLIC_URL}` + 'assets/images/search-icon/search-icon-24.svg'} />
                    </Button>
                </Box>
            </SearchBox>
        </BodySearchBox>
    );
}

export default Search;