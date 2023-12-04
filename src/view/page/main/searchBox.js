import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from './mainStyle/searchBoxStyle';
import { useState } from "react";


function Search() {
    const [inputText, setInputText] = useState('');
    return (
        <BodySearchBox>
            <SearchBox>
               <Box>
                <Select>
                    <option value="KR">KR</option>
                    <option value="NA">NA</option>
                </Select>
                <Input type='text' onChange={(e) => { setInputText(e.target.value); }} />
                <Button>
                    <Img src='/assets/images/search-icon/search-icon-24.svg' />
                </Button>
               </Box>
            </SearchBox>
        </BodySearchBox>
    );
}

export default Search;