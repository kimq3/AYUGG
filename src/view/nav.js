import { Link, useLocation } from "react-router-dom";
import * as style from "view/navStyle";

function Nav() {
  return (
    <style.NavBox>
      <style.NavBoxButton>
        <Link to="/">
          <style.Logo src='/assets/images/logo/navbar-logo.png' />
        </Link>
        <LinkList url="/" name="홈" />
        <LinkList url="/champion" name="챔피언분석" />
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
          <style.SearchInput />
          <style.SearchButton>
            <style.SearchIcon src='/assets/images/search-icon/search-icon-24.svg' />
          </style.SearchButton>
        </style.Search>
      </style.NavBoxSearch>
    </style.NavBox>
  );
}

function LinkList(props) {
  const { pathname } = useLocation();
  let width;

  switch (props.name){
    case '홈' :
      width = "20px";
      break;
    case '통계' :
      width = "40px";
      break;
    case '랭킹' :
      width = "40px";
      break;
    case '멀티서치' :
      width = "80px";
      break;
    case '대회일정' :
      width = "80px";
      break;
    case '챔피언분석' :
      width = "100px";
      break;
    case '챌린저매치' :
      width = "100px";
      break;
  }

  return (
    <>
      <style.ListBox $width={width} $pathname={pathname} $url={props.url}>
        <style.ListStyle to={props.url} $pathname={pathname} $url={props.url}>{props.name}</style.ListStyle>
      </style.ListBox>
    </>
  );
}

export default Nav;
