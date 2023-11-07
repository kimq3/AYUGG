import { ContainerDiv, CustomTextarea, ButtonsDiv, CountrySelect, SearchButton, ResultDiv } from "./multiStyle/multiPageStyle";
import Nav from "view/nav";
import { useState } from 'react';
import Filter from './textareaFilter';
import AddBox from './resultBox';
// import GetData from "./getData";

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTextList, setFilterTextList] = useState([]);

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
      {
        <ResultDiv>
          {filterTextList.map(data => {
            return (<AddBox nickname={data}/>)
          })}
        </ResultDiv>
      }
      {/* <div>{sample}</div> */}
    </div>
  );
}

export default Multi;
