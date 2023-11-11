import Nav from "view/nav";
import { CounterStyle, CounterBoxStyle, OutBoxStyle } from "./detailStyle";
import { BasicInfo, CounterOlTag } from "./detailComponent";

function ChampionsDetails() {
  return (
    <>
      <Nav></Nav>
      <OutBoxStyle height="300px">
        <BasicInfo></BasicInfo>
        <CounterBoxStyle>
          <CounterStyle backColor="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterOlTag win="true"></CounterOlTag>
          </CounterStyle>
          <CounterStyle backColor="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterOlTag win="false"></CounterOlTag>
          </CounterStyle>
        </CounterBoxStyle>
      </OutBoxStyle>
      <OutBoxStyle height="500px"></OutBoxStyle>
      <OutBoxStyle height="300px"></OutBoxStyle>
    </>
  );
}

export default ChampionsDetails;
