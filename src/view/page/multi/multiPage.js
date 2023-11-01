import './multi.css';
import Nav from "../../nav";

function MultiPage() {
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
                class="search-text" />
            <br />
            <br />
            <div class="buttons">
            <select name="country">
                <option class="option" value="KR">KR</option>
                <option class="option" value="NA">NA</option>
            </select>
            <button class="search" id="button">검색</button>
            </div>
        </div>      
        <multiResultBox />
    </div>
  );
}

function multiResultBox(props) {
  return(
    <div />
  );
}

function matchBoxCreate() {
  return (
    <div class="contextBox" id="result" />
  );
}

export default MultiPage;