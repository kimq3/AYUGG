import * as styled from "./detailsStyle";

function BasicInfo(props){
  const detailData = props.data.data[0];
  let imgUrl = detailData.champImg;
  const name = detailData.champName;
  
  return (
    <>
      <styled.BasicInfoStyle>
        <styled.BasicDivStyle $width="100px">
          <styled.BasicImgStyle src={imgUrl} />
        </styled.BasicDivStyle>
        <styled.BasicDivStyle $width="70%" $margin="0 5px 0 5px">
          <styled.BasicDivStyle $width="55%" $display="block">
            <styled.NameSkillStyle>{name}</styled.NameSkillStyle>
            <SkillImg data={detailData} />
          </styled.BasicDivStyle>
          <styled.BasicDivStyle $width="auto">
            <RateDiv data={detailData} type="winRate"></RateDiv>
            <RateDiv data={detailData} type="pickRate"></RateDiv>
            <RateDiv data={detailData} type="banRate"></RateDiv>
          </styled.BasicDivStyle>
        </styled.BasicDivStyle>
        <styled.BasicDivStyle $width="150px" /> {/* 빈 박스 */}
      </styled.BasicInfoStyle>
    </>
  );
}

function SkillImg(props) {
  let skillData = JSON.parse(props.data.champSkill);
  
  let i = 1;
  let skillImgList =  Object.values(skillData).map((index) => {
    return <styled.SkillImgStyle key={i++} $size="32px" src={index} />
  })
  
  return (<styled.NameSkillStyle>
    {skillImgList}
  </styled.NameSkillStyle>);
}

function RateDiv(props) {
  const rate = JSON.parse(props.data.rate)
  let type;
  let typeResult;

  switch (props.type){
    case 'winRate' :
      type = "승률";
      typeResult = rate.winRate;
      break;
    case 'pickRate' :
      type = "픽률";
      typeResult = rate.pickRate;
      break;
    case 'banRate' :
      type = "밴률";
      typeResult = rate.banRate;
      break;
    default:
      type = "";
      typeResult = "";
      break;
  }

  return (
    <>
      <styled.RateBoxStyle>
        <styled.RateStyle>{type}</styled.RateStyle>
        <styled.RateStyle $weight="700">{typeResult}</styled.RateStyle>
      </styled.RateBoxStyle>
    </>
  )
}

function NotFoundData() {
  return (
    <styled.NotFoundDivStyle> 수집중 </styled.NotFoundDivStyle>
  )
}

function CounterDiv(props) {
  return (
    <>
      <styled.CounterDivStyle>
        <styled.CounterImgStyle src={props.src}></styled.CounterImgStyle>
        <styled.CounterInfoStyle $margin="5px 0px;"></styled.CounterInfoStyle>
        <styled.CounterInfoStyle $margin="0;">{props.rate}</styled.CounterInfoStyle>
      </styled.CounterDivStyle>
    </>
  );
}

function CounterLiTag(props) {
  const detailData = props.data.data[0];

  let counterList = [];
  const win = JSON.parse(detailData.counter).winCounter;
  const lose = JSON.parse(detailData.counter).loseCounter;
  const length = win.length;

  for(let i = 0; i < length; i++){
    if (props.win === "true") {
      let divBox = win[i].championImg !== "imgNull" ? <CounterDiv key={i} src={win[i].championImg} rate={win[i].winRate} /> : <NotFoundData />;
      counterList.push(divBox)
    } else {
      let divBox = lose[i].championImg !== "imgNull" ? <CounterDiv key={i} src={lose[i].championImg} rate={lose[i].winRate} /> : <NotFoundData />;
      counterList.push(divBox)
    }
  }

  return (
    <styled.CounterOlStyle>
      <styled.CounterLiStyle>
        { counterList }
      </styled.CounterLiStyle>
    </styled.CounterOlStyle>
  );
}

export default function FirstArticle(props) {
  return (
    <>
      <styled.OutBoxStyle $height="300px">
        <BasicInfo data={props} />
        <styled.CounterBoxStyle>
          <styled.CounterStyle $back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterLiTag data={props} win="true"></CounterLiTag>
          </styled.CounterStyle>
          <styled.CounterStyle $back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterLiTag data={props} win="false"></CounterLiTag>
          </styled.CounterStyle>
        </styled.CounterBoxStyle>
      </styled.OutBoxStyle>
    </>
  );
}