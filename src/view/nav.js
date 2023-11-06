import { Link, useLocation } from "react-router-dom";
import { ListBox, ListStyle, Logo, NavBox, NavBoxButton, NavBoxSearch, Search, SearchButton, SearchIcon, SearchInput, SearchSelect } from 'view/navStyle';

function Nav() {
    return (
        <NavBox>
            <NavBoxButton>
                <Link to="/"><Logo></Logo></Link>
                <LinkList url="/" name="홈"/>
                <LinkList url="/champion" name="챔피언분석"/> 
                <LinkList url="/statistics" name="통계"/> 
                <LinkList url="/ranking" name="랭킹"/> 
                <LinkList url="/multi" name="멀티서치"/>
                <LinkList url="/challenger" name="챌린저매치"/>
                <LinkList url="/event" name="대회일정"/>
            </NavBoxButton>
            <NavBoxSearch>
                <Search>
                    <SearchSelect>
                        <option value="KR" selected>KR</option>
                        <option value="NA">NA</option>
                    </SearchSelect>
                    <SearchInput></SearchInput>
                    <SearchButton>
                        <SearchIcon></SearchIcon>
                    </SearchButton>
                </Search>
            </NavBoxSearch>
        </NavBox>
    );
}



function LinkList(props) {
    const {pathname}=useLocation();
    return (
        <>
        <ListBox pathname={pathname} url={props.url}>
            <ListStyle to={props.url}>{props.name}</ListStyle>
        </ListBox>
        </>
    );
}
  
export default Nav;

