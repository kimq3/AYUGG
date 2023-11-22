import { useState, useEffect } from "react";
import Nav from "view/nav";
import TopBox from "view/page/search/boxes/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/boxes/refreshButton"
import GetSearchData from "view/page/search/getSearchData";
import BottomBox from "./boxes/bottomBox";

function SearchPage(){
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    GetSearchData("hideonbush")
    .then((data)=>{
      setSearchData(data);
    })
  }, []);

  return (
    <div>
      <Nav></Nav>
      <ContainerDiv>
        <TopBox data={searchData}/>
        <Button />
        <br />
        <BottomBox data={searchData}/>
      </ContainerDiv>
      <br />
    </div>
  );
}

export default SearchPage;