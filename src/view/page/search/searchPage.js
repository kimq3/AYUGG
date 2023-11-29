import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import Nav from "view/nav";
import TopBox from "./boxes/topBox";
import { BlankDiv, ContainerDiv } from "./searchStyle/topBoxStyle";
import Button from "./boxes/refreshButton"
import GetSearchData from "./dataHandling/api/getSearchData";
import BottomBox from "./boxes/bottomBox";
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
        <BlankDiv />
        <BottomBox />
      </ContainerDiv>
      <BlankDiv />
    </div>
  );
}

export default SearchPage;