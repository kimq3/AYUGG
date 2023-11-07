import search from 'assets/images/search-icon/search-icon-24.svg'
import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from './mainStyle/searchBoxStyle';


function Search() {
    return (
        <BodySearchBox>
            <SearchBox>
               <Box>
                <Select>
                    <option value="KR">KR</option>
                    <option value="NA">NA</option>
                </Select>
                <Input type='text'></Input>
                <Button>
                    <Img src={search} />
                </Button>
               </Box>
            </SearchBox>
        </BodySearchBox>
    );
}

export default Search;