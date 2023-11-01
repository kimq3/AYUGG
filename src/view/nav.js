import logo from './image/logo/navbar-logo.png';
import { Link } from "react-router-dom";

function Nav() {
    
    return (
      <div className='navbar'>
            <div className='navbox-button'>
                <img src={logo}></img>
                <NavButton name="홈" value="/"><Link to={'/'}></Link></NavButton>
                <NavButton name="챔피언 분석" value="/champion"/>
                <NavButton name="통계" value="/static"/>
                <NavButton name="랭킹" value="/ranking"><Link to={'/ranking'}></Link></NavButton>
                <NavButton name="멀티서치" value="/multi"/>
                <NavButton name="챌린저매치" value="/challenger"/>
                <NavButton name="대회일정" value="/event"/>
            </div>
            
            <div class="nav-search-box">
                <div className='nav-search'>
                    <select name="country">
                        <option value="KR">KR</option>
                        <option value="NA">NA</option>
                    </select>
                    <input id="nav-input" type="text" />
                    <button id="nav-button">
                        {/* <img src={search} /> */}
                    </button>
                </div>
            </div>
        </div>
    );
}



function NavButton(props) {
    
  return (
      <button type="button" className="navbar-button" >{props.name}</button>
  );
}
  
export default Nav;
  