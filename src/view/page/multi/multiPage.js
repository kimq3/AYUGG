import './multi.css';
import Nav from "../../nav";
import { useState, useReducer } from 'react';
import Filter from './textareaFilter';
import AddBox from './addBox';

// const reducer = (state, action) => {
//   console.log(action.payload);
//   switch (action.type) {
//     case 'search':
//       const nickname = Filter(action.payload.inputText);
//       const newData = {
//         id: Date.now(),
//         nickname: nickname,
//       };
//       return {
//         datas: [...state.datas, newData],
//       };
//     default:
//       return state;
//   }
// }
// const initialState = {
//   datas: []
// }

function Multi() {
  const [inputText, setInputText] = useState('');
  const [filterTetxtList, setFilterTetxtList] = useState([]);
  // const [resultData, dispatch] = useReducer(reducer, initialState);

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
                class="search-text" value={inputText} onChange={(e) => {
                  setInputText(e.target.value);
                }} />
            <br />
            <br />
            <div class="buttons">
                <select name="country">
                    <option class="option" value="KR">KR</option>
                    <option class="option" value="NA">NA</option> 
                </select>
                <button class="search" id="button" onClick={() => {
                  setFilterTetxtList(Filter(inputText));
                  // dispatch({type: 'search', payload:{inputText}});
                }}>검색</button>
            </div>
      </div>
      <div class="contextBox">        
        {filterTetxtList.map(data => {
          return (<AddBox nickname={data}/>)
        })}
      </div>
    </div>
  );
}

export default Multi;
