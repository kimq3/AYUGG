import Nav from "view/nav";
import * as ds from "./detailStyle";
import * as dc from "./detailComponent";

function ChampionsDetails() {
  return (
    <>
      <Nav></Nav>
      <ds.OutBoxStyle height="300px">
        <dc.BasicInfo></dc.BasicInfo>
        <ds.CounterBoxStyle>
          <ds.CounterStyle back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <dc.CounterOlTag win="true"></dc.CounterOlTag>
          </ds.CounterStyle>
          <ds.CounterStyle back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <dc.CounterOlTag win="false"></dc.CounterOlTag>
          </ds.CounterStyle>
        </ds.CounterBoxStyle>
      </ds.OutBoxStyle>
      <ds.OutBoxStyle height="500px"></ds.OutBoxStyle>
      <ds.OutBoxStyle height="300px"></ds.OutBoxStyle>
    </>
  );
}

export default ChampionsDetails;
