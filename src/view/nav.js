import { Link } from "react-router-dom";
import { Logo, NavBox, NavBoxButton, NavBoxSearch, NavButton_S, Search, SearchButton, SearchIcon, SearchInput, SearchSelect } from './navStyle';

function Nav() {
    return (
        <NavBox>
            <NavBoxButton>
                <Logo></Logo>
                <NavButton name="홈" value="/"><Link to={'/'}></Link></NavButton>
                <NavButton name="챔피언 분석" value="/champion"/>
                <NavButton name="통계" value="/static"/>
                <NavButton name="랭킹" value="/ranking"><Link to={'/ranking'}></Link></NavButton>
                <NavButton name="멀티서치" value="/multi"/>
                <NavButton name="챌린저매치" value="/challenger"/>
                <NavButton name="대회일정" value="/event"/>
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



function NavButton(props) {
    
  return (
    <NavButton_S>{props.name}</NavButton_S>
  );
}
  
export default Nav;

//test
function test(){
    return
}