import * as styled from "../searchStyle/statisticBoxStyle";
import DoughnutChart from "../charts/doughnut";
import RadarCharactChart from "../charts/radar";
import { GetChampImg, GetKoreaName } from "../dataHandling/filterData";
import { useEffect, useState } from "react";
import { championUrl } from "model/constantly/apiConstants";
import { ChangeDoughnutChartData, ChangeRadarChartData } from "../dataHandling/changeChartData";

function StatisticBox(props) {
  return (
    <div>
      <styled.StatisticTable>
        <colgroup>
          <col width={"255px"} />
          <col width={"500px"} />
          <col width={"245px"} />
        </colgroup>
        <tbody>
          <tr>
            <styled.InfoTh>정보</styled.InfoTh>
            <styled.MostTh>모스트 챔피언</styled.MostTh>
            <styled.PlayStyleTh>플레이 스타일</styled.PlayStyleTh>
          </tr>
          <tr>
            <styled.InfoContentTh>
              <styled.InfoCover>
                <styled.GraphCover>
                  <DoughnutChart data={ChangeDoughnutChartData(props.data)}/>
                  <styled.InnerTextDiv>
                    <div style={{ fontSize: "16px" }}>{Math.round(props.data.first.wins / (props.data.first.wins + props.data.first.losses) * 100)}%</div>
                    <div style={{ fontSize: "10px" }}>{props.data.first.wins}승 {props.data.first.losses}패</div>
                  </styled.InnerTextDiv>
                </styled.GraphCover>
                <styled.RightTextDiv>
                  <div style={{ color: "orange" }}>{props.data.first.deaths === 0
                    ? "Perfect"
                    : "KDA " + ((props.data.first.kills + props.data.first.assists) / props.data.first.deaths).toFixed(2)}
                  </div>
                  <div style={{ color: "#626367", fontSize: "8px" }}>{(props.data.first.kills / props.data.totalMatch).toFixed(1)}/{(props.data.first.assists / props.data.totalMatch).toFixed(1)}/{(props.data.first.deaths / props.data.totalMatch).toFixed(1)}</div>
                  <div style={{ color: "orange" }}>킬관여 {((props.data.first.kills + props.data.first.assists) / props.data.first.teamkills * 100).toFixed(0)}%</div>
                </styled.RightTextDiv>
              </styled.InfoCover>
            </styled.InfoContentTh>
            <styled.MostContentTh>
              <MiddleStatisticTable data={props.data} />
            </styled.MostContentTh>
            <styled.PlayStyleContentTh>
              <styled.GraphCover1>
                <RadarCharactChart data={ChangeRadarChartData(props.data)}/>
              </styled.GraphCover1>
            </styled.PlayStyleContentTh>
          </tr>
        </tbody>
      </styled.StatisticTable>
    </div>
  );
}
function MiddleStatisticTable(props) {
  const [championInfo, setChampionInfo] = useState({});
  useEffect(() => {
    fetch(championUrl)
      .then((response) => response.json())
      .then((data) => {
        setChampionInfo(data.data);
      });
  }, []);
  return (
    <styled.MiddleStatisticTable>
      <tbody>
        <tr>
          <styled.MiddleStatisticTh></styled.MiddleStatisticTh>
          <styled.MiddleStatisticTh>KDA</styled.MiddleStatisticTh>
          <styled.MiddleStatisticTh>CS</styled.MiddleStatisticTh>
          <styled.MiddleStatisticTh>승률</styled.MiddleStatisticTh>
        </tr>
        <tr>
          <td>
            <span>전체</span>
          </td>
          <td>
            <styled.OrangeSpan>{props.data.secondTotal.deaths === 0
              ? "Perfect"
              : "KDA " + ((props.data.secondTotal.kills + props.data.secondTotal.assists) / props.data.secondTotal.deaths).toFixed(2)}</styled.OrangeSpan>
            <styled.DetailSpan>{(props.data.secondTotal.kills / props.data.totalMatch).toFixed(1)}/{(props.data.secondTotal.assists / props.data.totalMatch).toFixed(1)}/{(props.data.secondTotal.deaths / props.data.totalMatch).toFixed(1)}</styled.DetailSpan>
          </td>
          <td>
            <styled.OrangeSpan>CS {(props.data.secondTotal.cs / props.data.totalMatch).toFixed(0)}</styled.OrangeSpan>
          </td>
          <td>
            <styled.OrangeSpan>{(props.data.secondTotal.win / props.data.totalMatch * 100).toFixed(0)}%</styled.OrangeSpan>
            <styled.DetailSpan>{props.data.totalMatch}전</styled.DetailSpan>
          </td>
        </tr>
        {props.data.second.map((element) => {
          return (<tr>
            <td>
              <styled.MSChanpionImg src={GetChampImg(element.championName)} />
              <span>{GetKoreaName(championInfo, element.championName)}</span>
            </td>
            <td>
              <styled.OrangeSpan>{props.data.secondTotal.deaths === 0
              ? "Perfect"
              : "KDA " + ((element.kills + element.assists) / element.deaths).toFixed(2)}</styled.OrangeSpan>
              <styled.DetailSpan>{(element.kills / element.count).toFixed(1)}/{(element.deaths / element.count).toFixed(1)}/{(element.assists / element.count).toFixed(1)}</styled.DetailSpan>
            </td>
            <td>
              <styled.OrangeSpan>CS {(element.cs / element.count).toFixed(0)}</styled.OrangeSpan>
            </td>
            <td>
              <styled.OrangeSpan>{(element.win / element.count * 100).toFixed(0)}%</styled.OrangeSpan>
              <styled.DetailSpan>{element.count}전</styled.DetailSpan>
            </td>
          </tr>)
        })}


      </tbody>
    </styled.MiddleStatisticTable>
  )
}

export default StatisticBox;