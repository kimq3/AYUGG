import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Nav from "view/nav";
import TopBox from "view/page/search/boxes/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/boxes/refreshButton"
import GetSearchData from "view/page/search/getSearchData";
import BottomBox from "view/page/search/boxes/bottomBox";
// import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from "reduxTest/action";
import { store } from 'reduxTest/store';
import { fetchDataSuccess, fetchDataFailure } from "reduxTest/dataSlice";

function SearchPage(){
  const { data, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // const [ dataSet, setdataSet] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // dispatch(fetchDataRequest());
      try {
        const _data= await GetSearchData("hideonbush");
        dispatch(fetchDataSuccess(_data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    }
    fetchData().then(()=>{
      // console.log(store.getState());
      console.log(data);
      // setdataSet(data.payload);
    })
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
      {/* <ContainerDiv>
        <TopBox data={dataSet} />
        <Button />
        <br />
        <BottomBox data={dataSet} />
      </ContainerDiv> */}
      <br />
    </div>
  );
}

export default SearchPage;
