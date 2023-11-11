import Nav from "view/nav";
import { BasicInfo, Counter, CounterBox, OutBox } from "./detailStyle";
import { CounterOlTag } from "./detailComponent";

function ChampionsDetails() {
  return (
    <>
      <Nav></Nav>
      <OutBox height="300px">
        <BasicInfo></BasicInfo>
        <CounterBox>
          <Counter backColor="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterOlTag></CounterOlTag>
          </Counter>
          <Counter backColor="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterOlTag></CounterOlTag>
          </Counter>
        </CounterBox>
      </OutBox>
      <OutBox height="500px"></OutBox>
      <OutBox height="300px"></OutBox>
    </>
  );
}

export default ChampionsDetails;
