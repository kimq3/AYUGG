import { ContainerDiv, CustomTextarea, ButtonsDiv, CountrySelect, SearchButton, ResultDiv } from "view/page/multi/multiStyle/multiPageStyle";
import Nav from "view/nav";
import { useState } from 'react';
import Filter from 'view/page/multi/textareaFilter';
import AddBox from 'view/page/multi/addBox';

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
          {filterTextList.map(( data, index ) => {
            return (<AddBox key={index} nickname={data}/>)
          })}
        </ResultDiv>
      }
    </div>
  );
}

export default Multi;
