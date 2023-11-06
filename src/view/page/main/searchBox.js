<<<<<<< HEAD
// import search from '@/image/search-icon/search-icon-24.svg';
// import search from 'asset/image/search-icon/search-icon-24.svg'
import search from 'asset/image/search-icon/search-icon-24.svg'
import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from './mainStyle/searchBoxStyle';
=======
import search from 'assets/images/search-icon/search-icon-24.svg';
import { BodySearchBox, SearchBox, Box, Select, Input, Button, Img } from 'view/page/main/mainStyle/searchBoxStyle';
>>>>>>> 3391b42ecfdf2eb933ceff1890c15d605afa0fd2


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