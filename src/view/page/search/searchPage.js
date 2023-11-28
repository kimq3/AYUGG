import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Nav from "view/nav";
import TopBox from "view/page/search/boxes/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/boxes/refreshButton"
import GetSearchData from "view/page/search/getSearchData";
import BottomBox from "view/page/search/boxes/bottomBox";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "reduxTest/dataSlice";

function SearchPage(){
  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataRequest();
    GetSearchData("hideonbush").then((res) => {
      dispatch(fetchDataSuccess(res));
    }).catch((err) => {
      dispatch(fetchDataFailure(err));
    });
  }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div>
      <Nav></Nav>
      <ContainerDiv>
        <TopBox />
        <Button />
        <br />
        <BottomBox />
      </ContainerDiv>
      <br />
    </div>
  );
}

export default SearchPage;