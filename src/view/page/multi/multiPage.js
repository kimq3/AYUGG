import { ContainerDiv, CustomTextarea, ButtonsDiv, CountrySelect, SearchButton, ResultDiv, BlankDiv } from "./multiStyle/multiPageStyle";
import Nav from "view/nav";
import { useState, useEffect } from 'react';
import Filter from './dataHandling/textareaFilter';
import AddBox from './addBox';
import GetMultiData from './dataHandling/api/getMultiData';

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTextList, setFilterTextList] = useState([]);
  const [finalDataList, setFinalDataList] = useState([]);

  //리스트화된 nickList 변경시 최종데이터에 넣음
  useEffect(() => {
    let dataList = [];
    filterTextList.map((data, index) => {
      GetMultiData(data)
        .then((data) => {
          dataList[index] = data;
        }).then(() => {
          if (index === filterTextList.length -1) {
            setFinalDataList(dataList);
          }
        });
    });
  }, [filterTextList]);

  return (
    <div>
      <Nav />
      <BlankDiv />
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
        <BlankDiv />
        <BlankDiv />
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
      <BlankDiv />
      <ResultDiv>
        {
          finalDataList.map((data, index) => {
            console.log(finalDataList);
            return (<AddBox key={index} data={data} />);
          })
        }
      </ResultDiv>
    </div>
  );
}

export default Multi;
