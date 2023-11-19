import * as match from "view/page/search/searchStyle/matchesBoxStyle";
import GetQueueType from "view/page/search/filterData";

function MatchesBox(props) {
  return (
    <div>
      <MatchBox data={props.data}/>
    </div>
  );
}
function MatchBox(props) {
  // console.log(props.data.matches[0]);
  return (
    <div style={{position: 'relative'}}>
      <match.MatchDiv>
        <match.MatchFirstDiv>
          <match.Font1Div>솔로랭크</match.Font1Div>
          <match.Font2Div>12시간전</match.Font2Div>
          <match.Font2Div>24:00</match.Font2Div>
        </match.MatchFirstDiv>
        <match.MatchSecondDiv>
          <match.ChampImg />
          <span>
            <div>
              <match.Spell1Img />
              <match.Spell2Img />
            </div>
            <div>
              <match.Perk1Img />
              <match.Perk2Img />
            </div>
          </span>
        </match.MatchSecondDiv>
        <div>
          <match.Font1Div>0/10/7</match.Font1Div>
          <match.Font2Div>0.7</match.Font2Div>
        </div>
        <div>
          <match.KillRateCsDiv>
            <match.Font2Span1>킬관여 43%</match.Font2Span1>
            <match.Font2Span2>CS 203</match.Font2Span2>
          </match.KillRateCsDiv>
          <span>
            <match.Item0Img />
            <match.Item1Img />
            <match.Item2Img />
            <match.Item3Img />
            <match.Item4Img />
            <match.Item5Img />
            <match.Item6Img />
          </span>
        </div>
        <match.MatchFifthDiv>
          <match.PartiListUl>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
          </match.PartiListUl>
          <match.PartiListUl>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
            <li>
              <match.PartiImg />
              <span>겨울좋앙</span>
            </li>
          </match.PartiListUl>
        </match.MatchFifthDiv>
        <div />
      </match.MatchDiv>
      <match.OpenDiv>
        <match.OpenImg src={`${process.env.PUBLIC_URL}` + 'assets/images/down-arrow.svg'}/>
      </match.OpenDiv>
    </div>
  );
}

export default MatchesBox;