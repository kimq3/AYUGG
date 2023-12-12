import { Link, useLocation, useParams } from "react-router-dom";
import * as style from "view/navStyle";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Nav() {
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

  const activeEnter = (e) => {
    if(e.key === "Enter") {
      searchButtonClick();
    }
  }

  return (
    <style.NavBox>
      <style.NavBoxButton>
        <Link to="/">
          <style.Logo src={'/assets/images/logo/navbar-logo.png'} />
        </Link>
        <LinkList url="/" name="홈" />
        <LinkList url="/champions" name="챔피언분석" />
        <LinkList url="/statistics" name="통계" />
        <LinkList url="/ranking" name="랭킹" />
        <LinkList url="/multi" name="멀티서치" />
        <LinkList url="/challenger" name="챌린저매치" />
        <LinkList url="/event" name="대회일정" />
      </style.NavBoxButton>
      <style.NavBoxSearch>
        <style.Search>
          <style.SearchSelect>
            <option value="KR">KR</option>
            <option value="NA">NA</option>
          </style.SearchSelect>
          <style.SearchInput value={inputText} onChange={(e) => { setInputText(e.target.value); }} onKeyDown={activeEnter} />
          <style.SearchButton onClick={searchButtonClick} >
            <style.SearchIcon src={`${process.env.PUBLIC_URL}` + '/assets/images/search-icon/search-icon-24.svg'} />
          </style.SearchButton>
        </style.Search>
      </style.NavBoxSearch>
    </style.NavBox>
  );
}

function LinkList(props) {
  const { pathname } = useLocation();
  let width;
  const pathName = pathname.split('/')[1]
  const url = props.url.split('/')[1]

  switch (props.name) {
    case '홈':
      width = "20px";
      break;
    case '통계':
      width = "40px";
      break;
    case '랭킹':
      width = "40px";
      break;
    case '멀티서치':
      width = "80px";
      break;
    case '대회일정':
      width = "80px";
      break;
    case '챔피언분석':
      width = "100px";
      break;
    case '챌린저매치':
      width = "100px";
      break;
  }

  return (
    <>
      <style.ListBox $width={width} $pathname={pathName} $url={url}>
        <style.ListStyle to={props.url} $pathname={pathName} $url={url}>{props.name}</style.ListStyle>
      </style.ListBox>
    </>
  );
}

export default Nav;
