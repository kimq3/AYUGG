import { MatchDiv, MatchChampImg, KdaDiv, TimeDiv } from 'view/page/multi/multiStyle/resultBoxStyle';

function AddMatchBox() {
    let matchIdList = [1,2,3,4,5]
    return (
        <div>
            {matchIdList.map((matchId, index) => (
                <MatchDiv key={index}>
                    <MatchChampImg />
                    <KdaDiv style={ (matchIdList[0] === 1) ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
                        <div>0/0/0</div>
                    </KdaDiv>
                    {/* 분 시간 일로 계산 */}
                    <TimeDiv>1시간전</TimeDiv>
                </MatchDiv>
            ))}
        </div>
    );
}

export default AddMatchBox;