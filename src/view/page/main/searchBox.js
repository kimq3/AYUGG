import search from '../../image/search-icon/search-icon-24.svg';
import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from './mainStyle/searchBoxStyle';


function Search() {
    return (
        <BodySearchBox>
            <SearchBox>
               <Box>
                <Select>
                    <option value="KR" selected>KR</option>
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