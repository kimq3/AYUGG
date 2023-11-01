import { useLocation } from 'react-router';
import { Logo, NavBox, NavBoxButton, NavBoxSearch, Search, SearchButton, SearchIcon, SearchInput, SearchSelect, ListStyle, ListBox } from './navStyle'


function Nav() {
    return (
        <NavBox>
            <NavBoxButton>
                <Logo></Logo>
                <LinkList url="/" name="홈" />
                <LinkList url="/static" name="통계" />
                <LinkList url="/ranking" name="랭킹" />
                <LinkList url="/multi" name="멀티서치" />
                <LinkList url="/challenger" name="챌린저" />
                <LinkList url="/event" name="대회일정" />
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
 
export default Nav;

function LinkList(props) {
    const { pathname } = useLocation();
    return <>
        <ListBox pathname={pathname} url={props.url}>
            <ListStyle to={props.url}>{props.name}</ListStyle>
        </ListBox>
    </>
}