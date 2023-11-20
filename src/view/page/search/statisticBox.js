import * as sb from "view/page/search/searchStyle/statisticBoxStyle";

function StatisticBox() {
  return (
    <sb.StatisticTable>
      <colgroup>
        <col width={"250px"} />
        <col width={"500px"} />
        <col width={"250px"} />
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
                <sb.GraphSample />
                <sb.InnerTextDiv>
                  <div style={{ fontSize: "16px" }}>50%</div>
                  <div style={{ fontSize: "10px" }}>10승 10패</div>
                </sb.InnerTextDiv>
              </sb.GraphCover>
              <sb.RightTextDiv>
                <div style={{ color: "orange" }}>KDA 3.72</div>
                <div style={{ color: "#626367", fontSize: "8px" }}>7.3/5.1/11.9</div>
                <div style={{ color: "orange" }}>킬관여 51%</div>
              </sb.RightTextDiv>
            </sb.InfoCover>
          </sb.InfoContentTh>
          <sb.MostContentTh>
            <MiddleStatisticTable />
          </sb.MostContentTh>
          <sb.PlayStyleContentTh>
            <sb.GraphCover1>              
              <sb.GraphSample1 />
            </sb.GraphCover1>
          </sb.PlayStyleContentTh>
        </tr>
      </tbody>
    </sb.StatisticTable>
  );
}
function MiddleStatisticTable() {
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
            <sb.OrangeSpan>KDA 3.72</sb.OrangeSpan>
            <sb.DetailSpan>7.3/5.1/11.9</sb.DetailSpan>
          </td>
          <td>
            <sb.OrangeSpan>CS 170</sb.OrangeSpan>
          </td>
          <td>
            <sb.OrangeSpan>51%</sb.OrangeSpan>
            <sb.DetailSpan>7전</sb.DetailSpan>
          </td>
        </tr>
        <tr>
          <td>
            <sb.MSChanpionImg />
            <span>신드라</span>
          </td>
          <td>
            <sb.OrangeSpan>KDA 3.72</sb.OrangeSpan>
            <sb.DetailSpan>7.3/5.1/11.9</sb.DetailSpan>
          </td>
          <td>
            <sb.OrangeSpan>CS 170</sb.OrangeSpan>
          </td>
          <td>
            <sb.OrangeSpan>51%</sb.OrangeSpan>
            <sb.DetailSpan>7전</sb.DetailSpan>
          </td>
        </tr>
        <tr>
          <td>
            <sb.MSChanpionImg />
            <span>신드라</span>
          </td>
          <td>
            <sb.OrangeSpan>KDA 3.72</sb.OrangeSpan>
            <sb.DetailSpan>7.3/5.1/11.9</sb.DetailSpan>
          </td>
          <td>
            <sb.OrangeSpan>CS 170</sb.OrangeSpan>
          </td>
          <td>
            <sb.OrangeSpan>51%</sb.OrangeSpan>
            <sb.DetailSpan>7전</sb.DetailSpan>
          </td>
        </tr>
        <tr>
          <td>
            <sb.MSChanpionImg />
            <span>신드라</span>
          </td>
          <td>
            <sb.OrangeSpan>KDA 3.72</sb.OrangeSpan>
            <sb.DetailSpan>7.3/5.1/11.9</sb.DetailSpan>
          </td>
          <td>
            <sb.OrangeSpan>CS 170</sb.OrangeSpan>
          </td>
          <td>
            <sb.OrangeSpan>51%</sb.OrangeSpan>
            <sb.DetailSpan>7전</sb.DetailSpan>
          </td>
        </tr>
        
      </tbody>
    </sb.MiddleStatisticTable>
  )
}

export default StatisticBox;