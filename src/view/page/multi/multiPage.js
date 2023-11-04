import './multi.css';
import Nav from "../../nav";
import { useState, useEffect } from 'react';
import Filter from './textareaFilter';
import AddBox from './addBox';
import GetData from './getData';

function Multi() {
  const [inputText, setInputText] = useState('');
  // const [outputText, setOutputText] = useState('');
  const [divList, setDivList] = useState([]);

  const handleInputChange = (e) => {
    setInputText(Filter(e.target.value));
  }

  // const handleButtonClick = () => {
  //   setOutputText(inputText);
  // }
  
  useEffect(() => {
    const newDataList = [];
    newDataList = inputText.map((nickname) => {
      return GetData(nickname);
    });
    setDivList(AddBox(newDataList));    
  }, [outputText]);

  const addDiv = () => {
  };

  // const MultiResultBox = () => {
  //   var boxes = [];
  //   for(let i in textList){
  //     boxes.push(<div>{i}</div>)
  //   }
  //   return boxes;
  // };

  return (
    <div>
        <Nav />
        <br />
        <div class="container">
            <textarea
                id="textarea"
                placeholder="~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다."
                class="search-text" value={inputText} onChange={handleInputChange} />
            <br />
            <br />
            <div class="buttons">
                <select name="country">
                    <option class="option" value="KR">KR</option>
                    <option class="option" value="NA">NA</option> 
                </select>
                <button class="search" id="button" onClick={handleButtonClick}>검색</button>
            </div>
      </div>
      <div>
        {/* 결과박스 전체 */}
      </div>
    </div>
  );
}

export default Multi;
