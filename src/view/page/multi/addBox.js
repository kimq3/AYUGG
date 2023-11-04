import "./Box.css";

function AddBox(props) {
    return (
    // <div> 형식으로 구성
    <div class="context">
        {/* 티어이미지 */}
        <img class="tier-img" />
        {/* 닉네임 가공된걸로 교체 */}
        <div class="nickname">{props.nickname}</div>
        <div class="tier-text">GRANDMASTER I (839 LP)</div>
        <div class="WLR-div">
            <div class="win-rate-graph">267
                <div />
                {/* width = 패/(승+패)*130-7 px */}
                <div class="bar" style={{width: "50px"}}>233</div>
            </div>
            <div>53%</div>
        </div>
        {/* 5번반복 */}
        {AddMatchBox()}
        <div>

        </div>
    </div>);
}

function AddMatchBox() {
    return (
        <div class="match-div">
            <img class="match-div-img"/>
            <div class="kda-box" style={ 1 === 1 ? {background: "#D5E3FF", color: "#4171D6"} : {background: "#FFD8D9", color: "#D31A45"}}>
                <div>0/0/0</div>
            </div>
            {/* 분 시간 일로 계산 */}
            <div class="time-div">1시간전</div>
        </div>
    );
}

export default AddBox;