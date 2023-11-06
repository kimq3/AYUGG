import { ContainerDiv, TierImg, NicknameDiv, TierTextDiv, WinRateGraphDiv, LossRateGraphDiv, WLRDiv, MatchDiv, MatchChampImg, KdaDiv, TimeDiv} from 'view/page/multi/multiStyle/resultBoxStyle';

function AddBox(props) {
    return (
    // <div> 형식으로 구성
    <ContainerDiv>
        {/* 티어이미지 */}
        <TierImg/>
        {/* 닉네임 가공된걸로 교체 */}
        <NicknameDiv>{props.nickname}</NicknameDiv>
        <TierTextDiv>GRANDMASTER I (839 LP)</TierTextDiv>
        <WLRDiv>
            <WinRateGraphDiv>267
                <div />
                {/* width = 패/(승+패)*130-7 px */}
                <LossRateGraphDiv style={{width: "50px"}}>233</LossRateGraphDiv>
            </WinRateGraphDiv>
            <div>53%</div>
        </WLRDiv>
        {
            AddMatchBox()
        }
        <div>

        </div>
    </ContainerDiv>);
}

function AddMatchBox() {
    let matchIdList = [1,2,3,4,5]
    return (
        <div>
            {matchIdList.map((matchId) => (
                <MatchDiv>
                    <MatchChampImg />
                    <KdaDiv style={ 1 === 1 ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
                        <div>0/0/0</div>
                    </KdaDiv>
                    {/* 분 시간 일로 계산 */}
                    <TimeDiv>1시간전</TimeDiv>
                </MatchDiv>
            ))}
        </div>
    );
}

export default AddBox;