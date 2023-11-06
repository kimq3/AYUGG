import 'view/page/multi/multi.css';
import Nav from "view/nav";
import { useState, useReducer } from 'react';
import Filter from './textareaFilter';
import AddBox from './addBox';

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTetxtList, setFilterTetxtList] = useState([]);
  // const [resultData, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <Nav />
        <br />
        <div className="container">
            <textarea
                id="textarea"
                placeholder="~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다."
                className="search-text" value={inputText} onChange={(e) => {
                  setInputText(e.target.value);
                }} />
            <br />
            <br />
            <div className="buttons">
                <select name="country">
                    <option className="option" value="KR">KR</option>
                    <option className="option" value="NA">NA</option> 
                </select>
                <button className="search" id="button" onClick={() => {
                  setFilterTetxtList(Filter(inputText));
                  // dispatch({type: 'search', payload:{inputText}});
                }}>검색</button>
            </div>
      </div>
      <div className="contextBox">        
        {filterTetxtList.map(data => {
          return (<AddBox nickname={data}/>)
        })}
      </div>
    </div>
  );
}

export default Multi;
