import { Link, useLocation } from "react-router-dom";
import * as ns from "view/navStyle";

function Nav() {
  return (
    <ns.NavBox>
      <ns.NavBoxButton>
        <Link to="/">
          <ns.Logo></ns.Logo>
        </Link>
        <LinkList url="/" name="홈" />
        <LinkList url="/champion" name="챔피언분석" />
        <LinkList url="/statistics" name="통계" />
        <LinkList url="/ranking" name="랭킹" />
        <LinkList url="/multi" name="멀티서치" />
        <LinkList url="/challenger" name="챌린저매치" />
        <LinkList url="/event" name="대회일정" />
      </ns.NavBoxButton>
      <ns.NavBoxSearch>
        <ns.Search>
          <ns.SearchSelect>
            <option value="KR">KR</option>
            <option value="NA">NA</option>
          </ns.SearchSelect>
          <ns.SearchInput />
          <ns.SearchButton>
            <ns.SearchIcon></ns.SearchIcon>
          </ns.SearchButton>
        </ns.Search>
      </ns.NavBoxSearch>
    </ns.NavBox>
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
      <ns.ListBox width={width} pathname={pathname} url={props.url}>
        <ns.ListStyle to={props.url} pathname={pathname} url={props.url}>{props.name}</ns.ListStyle>
      </ns.ListBox>
    </>
  );
}

export default Nav;
