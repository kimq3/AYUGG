import * as match from "view/page/search/searchStyle/matchesBoxStyle";
import * as fd from "view/page/search/filterData";
import { useState, useEffect } from "react";

function MatchesBox(props) {
  return (
    <div>
      <MatchBox data={props.data} index={0}/>
    </div>
  );
}
function MatchBox(props) {
  console.log(props.data.matches[props.index],props.data.partinum[props.index]);

  return (
    <div style={{position: 'relative'}}>
      <match.MatchDiv>
        <match.MatchFirstDiv>
          <match.Font1Div>{fd.GetQueueType(props.data.matches[0].queueId)}</match.Font1Div>
          <match.Font2Div>{fd.GetMatchDate(props.data.matches[0].gameStartTimestamp)}</match.Font2Div>
          <match.Font2Div>{fd.GetMatchTime(props.data.matches[0].gameDuration)}</match.Font2Div>
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