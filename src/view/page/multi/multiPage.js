import { ContainerDiv, Textarea, ButtonsDiv, CountrySelect, SearchButton, ResultDiv } from "./multiStyle/multiPageStyle";
import Nav from "view/nav";
import { useState } from 'react';
import Filter from './textareaFilter';
import AddBox from './resultBox';

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTetxtList, setFilterTetxtList] = useState([]);
  
  return (
    <div>
      <Nav />
      <br />
      <ContainerDiv>
          <Textarea
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
            setFilterTetxtList(Filter(inputText));
            // dispatch({type: 'search', payload:{inputText}});
          }}>검색</SearchButton>
        </ButtonsDiv>
      </ContainerDiv>
      <br />
      <ResultDiv>        
        {filterTetxtList.map(data => {
          return (<AddBox nickname={data}/>)
        })}
      </ResultDiv>
    </div>
  );
}

export default Multi;
