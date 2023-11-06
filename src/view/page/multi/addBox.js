import "./box.css";

function AddBox(props) {
    const matchIdList = [1,2,3,4,5];
    return (
    // <div> 형식으로 구성
    <div className="context">
        {/* 티어이미지 */}
        <img className="tier-img" />
        {/* 닉네임 가공된걸로 교체 */}
        <div className="nickname">{props.nickname}</div>
        <div className="tier-text">GRANDMASTER I (839 LP)</div>
        <div className="WLR-div">
            <div className="win-rate-graph">267
                <div />
                {/* width = 패/(승+패)*130-7 px */}
                <div className="bar" style={{width: "50px"}}>233</div>
            </div>
            <div>53%</div>
        </div>
        {
            AddMatchBox(matchId)
        }
        <div>

        </div>
    </div>);
}

function AddMatchBox() {
    return (
        <div>
            {matchIdList.map((matchId) => (
                <div className="match-div">
                    <img className="match-div-img"/>
                    <div className="kda-box" style={ 1 === 1 ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
                        <div>0/0/0</div>
                    </div>
                {/* 분 시간 일로 계산 */}
                <div className="time-div">1시간전</div>
            </div>
            ))}
        </div>
    );
}

export default AddBox;