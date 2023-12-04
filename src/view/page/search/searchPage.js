import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from "view/nav";
import TopBox from "./boxes/topBox";
import { BlankDiv, ContainerDiv } from "./searchStyle/topBoxStyle";
import Button from "./boxes/refreshButton"
import GetSearchData from "./dataHandling/api/getSearchData";
import BottomBox from "./boxes/bottomBox";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "redux/dataSlice";

function SearchPage(){
  const dispatch = useDispatch();
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const nickname = location.state.nickname;
    fetchDataRequest();
    GetSearchData(nickname).then((res) => {
      dispatch(fetchDataSuccess(res));
    }).catch((err) => {
      dispatch(fetchDataFailure(err));
      navigate('/');
      setTimeout(() => {
        alert('정확한 소환사 이름을 입력해주세요');
      }, 500);
    });
  }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>;
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