import { MatchDiv, MatchChampImg, KdaDiv, TimeDiv } from 'view/page/multi/multiStyle/resultBoxStyle';

// input: matchList output: 결과창안의 match 5개
// 1개의 결과창 안의 5개의 match결괄 나타낸다
function AddMatchBox(props) {
  const currentTime = new Date();
  {console.log(props.value)}
  return (
    <div>
      {props.value.map((data, index) => (
        <MatchDiv key={index}>
          <MatchChampImg />
          <KdaDiv style={ (data.win) ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
              <div>{data.kda}</div>
          </KdaDiv>
          <TimeDiv>
          {
            Math.floor((currentTime.getTime() - data.startTime) / 3600000) < 24
            ? Math.floor((currentTime.getTime() - data.startTime) / 3600000) + "시간전"
            : Math.floor((currentTime.getTime() - data.startTime) / 3600000 / 24) + "일전"
              
          }
          </TimeDiv>
        </MatchDiv>
      ))}
    </div>
  );
}

export default AddMatchBox;