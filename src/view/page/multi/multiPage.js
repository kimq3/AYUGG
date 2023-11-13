import { ContainerDiv, CustomTextarea, ButtonsDiv, CountrySelect, SearchButton, ResultDiv } from "view/page/multi/multiStyle/multiPageStyle";
import Nav from "view/nav";
import { useState, useEffect } from 'react';
import Filter from 'view/page/multi/textareaFilter';
import AddBox from 'view/page/multi/addBox';
import GetMultiData from 'view/page/multi/getMultiData';

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTextList, setFilterTextList] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    let dataList = [];
      filterTextList.map(( data, index ) => {
        GetMultiData(data)
        .then((data) => {
          dataList[index] = data;
          console.log(data);
        });
      })

    // getData.filter(() => {
    //   setData(dataList);
    //   console.log(dataList);
    //   console.log(data);
    // });
  },[filterTextList]);

  return (
    <div>
      <Nav />
      <br />
      <ContainerDiv>
          <CustomTextarea
              id="textarea"
              placeholder="~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다."
            value={inputText} onChange={(e) => { setInputText(e.target.value); }}
          />
        <br />
        <br />
        <ButtonsDiv>
          <CountrySelect>
            <option value="KR">KR</option>
            <option value="NA">NA</option> 
          </CountrySelect>
          <SearchButton onClick={() => {
            setFilterTextList(Filter(inputText));
          }}>검색</SearchButton>
        </ButtonsDiv>
      </ContainerDiv>
      <br />
      <ResultDiv>
        {/* {data.map(( data, index ) => {
          return (<AddBox key={index} data={data}/>)
        })} */}
      </ResultDiv>
    </div>
  );
}

export default Multi;
