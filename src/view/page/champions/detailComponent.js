import { BasicInfo, Counter, CounterBox, OutBox } from "./detailStyle";

export function DetailArticle() {
  return <>
    <OutBox height="300px">
      <BasicInfo></BasicInfo>
      <CounterBox>
        <Counter backColor="rgb(49, 49, 79)" color="rgb(96, 96, 240)">상대하기 쉬운 챔피언</Counter>
        <Counter backColor="rgb(108, 65, 65)" color="rgb(255, 26, 26)">상대하기 어려운 챔피언</Counter>
      </CounterBox>
    </OutBox>
    <OutBox height="500px"></OutBox>
    <OutBox height="300px"></OutBox>
  </>;
}
