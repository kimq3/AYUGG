import { useState, useEffect } from "react";
import Nav from "view/nav";
import TopBox from "view/page/search/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/refreshButton"
import GetSearchData from "view/page/search/getSearchData";

function SearchPage(){
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    GetSearchData("hideonbush")
    .then((data)=>{
      setSearchData(data);
      console.log(data);
    })
  }, []);

  return (
    <div>
      <Nav></Nav>
      <ContainerDiv>
        <TopBox data={searchData}/>
        <Button />
        <br />

      </ContainerDiv>
      {/* <ContainerDiv>
        <TopDiv />
        <RefreshButton />
        <br />
        <BottomDiv />
      <ContainerDiv/> */}
    </div>
  );
}

export default SearchPage;