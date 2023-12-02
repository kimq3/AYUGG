import * as sb from "../searchStyle/statisticBoxStyle";
import DoughnutChart from "../charts/doughnut";
import RadarCharactChart from "../charts/radar";
import { GetChampImg, GetKoreaName } from "../dataHandling/filterData";
import { useEffect, useState } from "react";
import { championUrl } from "model/constantly/apiConstants";

function StatisticBox(props) {
  return (
    <div>
      <sb.StatisticTable>
        <colgroup>
          <col width={"255px"} />
          <col width={"500px"} />
          <col width={"245px"} />
        </colgroup>
        <tbody>
          <tr>
            <sb.InfoTh>정보</sb.InfoTh>
            <sb.MostTh>모스트 챔피언</sb.MostTh>
            <sb.PlayStyleTh>플레이 스타일</sb.PlayStyleTh>
          </tr>
          <tr>
            <sb.InfoContentTh>
              <sb.InfoCover>
                <sb.GraphCover>
                  <DoughnutChart />
                  <sb.InnerTextDiv>
                    <div style={{ fontSize: "16px" }}>{Math.round(props.data.first.wins / (props.data.first.wins + props.data.first.losses) * 100)}%</div>
                    <div style={{ fontSize: "10px" }}>{props.data.first.wins}승 {props.data.first.losses}패</div>
                  </sb.InnerTextDiv>
                </sb.GraphCover>
                <sb.RightTextDiv>
                  <div style={{ color: "orange" }}>{props.data.first.deaths === 0
                    ? "Perfect"
                    : "KDA " + ((props.data.first.kills + props.data.first.assists) / props.data.first.deaths).toFixed(2)}
                  </div>
                  <div style={{ color: "#626367", fontSize: "8px" }}>{(props.data.first.kills / props.data.totalMatch).toFixed(1)}/{(props.data.first.assists / props.data.totalMatch).toFixed(1)}/{(props.data.first.deaths / props.data.totalMatch).toFixed(1)}</div>
                  <div style={{ color: "orange" }}>킬관여 {((props.data.first.kills + props.data.first.assists) / props.data.first.teamkills * 100).toFixed(0)}%</div>
                </sb.RightTextDiv>
              </sb.InfoCover>
            </sb.InfoContentTh>
            <sb.MostContentTh>
              <MiddleStatisticTable data={props.data} />
            </sb.MostContentTh>
            <sb.PlayStyleContentTh>
              <sb.GraphCover1>
                <RadarCharactChart />
              </sb.GraphCover1>
            </sb.PlayStyleContentTh>
          </tr>
        </tbody>
      </sb.StatisticTable>
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
    <sb.MiddleStatisticTable>
      <tbody>
        <tr>
          <sb.MiddleStatisticTh></sb.MiddleStatisticTh>
          <sb.MiddleStatisticTh>KDA</sb.MiddleStatisticTh>
          <sb.MiddleStatisticTh>CS</sb.MiddleStatisticTh>
          <sb.MiddleStatisticTh>승률</sb.MiddleStatisticTh>
        </tr>
        <tr>
          <td>
            <span>전체</span>
          </td>
          <td>
            <sb.OrangeSpan>{props.data.secondTotal.deaths === 0
              ? "Perfect"
              : "KDA " + ((props.data.secondTotal.kills + props.data.secondTotal.assists) / props.data.secondTotal.deaths).toFixed(2)}</sb.OrangeSpan>
            <sb.DetailSpan>{(props.data.secondTotal.kills / props.data.totalMatch).toFixed(1)}/{(props.data.secondTotal.assists / props.data.totalMatch).toFixed(1)}/{(props.data.secondTotal.deaths / props.data.totalMatch).toFixed(1)}</sb.DetailSpan>
          </td>
          <td>
            <sb.OrangeSpan>CS {(props.data.secondTotal.cs / props.data.totalMatch).toFixed(0)}</sb.OrangeSpan>
          </td>
          <td>
            <sb.OrangeSpan>{(props.data.secondTotal.win / props.data.totalMatch * 100).toFixed(0)}%</sb.OrangeSpan>
            <sb.DetailSpan>{props.data.totalMatch}전</sb.DetailSpan>
          </td>
        </tr>
        {props.data.second.map((element) => {
          return (<tr>
            <td>
              <sb.MSChanpionImg src={GetChampImg(element.championName)} />
              <span>{GetKoreaName(championInfo, element.championName)}</span>
            </td>
            <td>
              <sb.OrangeSpan>{props.data.secondTotal.deaths === 0
              ? "Perfect"
              : "KDA " + ((element.kills + element.deaths) / element.assists).toFixed(2)}</sb.OrangeSpan>
              <sb.DetailSpan>{(element.kills / element.count).toFixed(1)}/{(element.deaths / element.count).toFixed(1)}/{(element.assists / element.count).toFixed(1)}</sb.DetailSpan>
            </td>
            <td>
              <sb.OrangeSpan>CS {(element.cs / element.count).toFixed(0)}</sb.OrangeSpan>
            </td>
            <td>
              <sb.OrangeSpan>{(element.win / element.count * 100).toFixed(0)}%</sb.OrangeSpan>
              <sb.DetailSpan>{element.count}전</sb.DetailSpan>
            </td>
          </tr>)
        })}


      </tbody>
    </sb.MiddleStatisticTable>
  )
}

export default StatisticBox;