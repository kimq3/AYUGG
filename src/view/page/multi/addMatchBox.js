import { MatchDiv, MatchChampImg, KdaDiv, TimeDiv } from 'view/page/multi/multiStyle/resultBoxStyle';

function AddMatchBox(matches) {
  const currentTime = new Date();
  return (
    <div>
      {matches.map((data, index) => (
        <MatchDiv key={index}>
          <MatchChampImg />
          <KdaDiv style={ (data[index].win) ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
              <div>{data[index].kda}</div>
          </KdaDiv>
          
          <TimeDiv>
          {
            Math.floor((currentTime.getTime() - data[index].startTime) / 3600000) < 24
            ? Math.floor((currentTime.getTime() - data[index].startTime) / 3600000) + "시간전"
            : Math.floor((currentTime.getTime() - data[index].startTime) / 3600000 / 24) + "일전"
              
          }
          </TimeDiv>
        </MatchDiv>
      ))}
    </div>
  );
}

export default AddMatchBox;