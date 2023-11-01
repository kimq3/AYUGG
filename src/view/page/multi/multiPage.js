import './multi.css';
import Nav from "../../nav";
import { useRef } from 'react';

function Multi() {
  const ref = useRef(null);
  let textList;

  const Filter = () => {
    if (ref.current.value.trim().length === 0) {
      alert("문자를 입력해주세요.");
      return;
    } else {
      if (ref.current.value.includes("\n")) {
        textList = ref.current.value.split("\n").filter(Boolean);
        for (let index = 0; index < textList.length; index++) {
          if (textList[index].includes("님이 방에 참가했습니다.")) {
            textList[index] = textList[index]
              .split("님이 방에 참가했습니다.")
              .filter(Boolean);
          }
        }
        textList = textList.flat();
      } else {
        textList = ref.current.value
          .split("님이 방에 참가했습니다.")
          .filter(Boolean);
      }
    }
    console.log(textList);
  };

  const MultiResultBox = () => {
    var boxes = [];
    for(let i in textList){
      boxes.push(<div>{i}</div>)
    }
    return boxes;
  };

  return (
    <div>
        <Nav></Nav>
        <br />
        <div class="container">
            <textarea
                id="textarea"
                placeholder="~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다.
~~~~~~~~~~~~~ 님이 방에 참가했습니다."
                class="search-text" ref={ref} />
            <br />
            <br />
            <div class="buttons">
                <select name="country">
                    <option class="option" value="KR">KR</option>
                    <option class="option" value="NA">NA</option> 
                </select>
                <button class="search" id="button" onClick={Filter}>검색</button>
            </div>
      </div>
      <div></div>
    </div>
  );
}

export default Multi;
