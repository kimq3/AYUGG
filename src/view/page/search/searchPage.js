import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "view/nav";
import TopBox from "view/page/search/boxes/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/boxes/refreshButton"
import GetSearchData from "view/page/search/getSearchData";
import BottomBox from "view/page/search/boxes/bottomBox";
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "reduxTest/action";

function SearchPage(){
  let { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [ dataSet, setdataSet] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchDataRequest());
      try {
        const data = await GetSearchData("hideonbush");
        console.log(fetchDataSuccess(data));
        return dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    }
    fetchData().then((data)=>{
      // console.log(data);
      setdataSet(data.payload);
    })
  }, []);

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
        <TopBox data={dataSet} />
        <Button />
        <br />
        <BottomBox data={dataSet} />
      </ContainerDiv>
      <br />
    </div>
  );
}

export default SearchPage;