import * as style from "./detailsStyle";

function BasicInfo(props){
  const detailData = props.data.data[0];
  let imgUrl = detailData.champImg;
  const name = detailData.champName;
  
  return (
    <>
      <style.BasicInfoStyle>
        <style.BasicDivStyle $width="100px">
          <style.BasicImgStyle src={imgUrl} />
        </style.BasicDivStyle>
        <style.BasicDivStyle $width="70%" $margin="0 5px 0 5px">
          <style.BasicDivStyle $width="55%" $display="block">
            <style.NameSkillStyle>{name}</style.NameSkillStyle>
            <SkillImg data={detailData} />
          </style.BasicDivStyle>
          <style.BasicDivStyle $width="auto">
            <RateDiv data={detailData} type="winRate"></RateDiv>
            <RateDiv data={detailData} type="pickRate"></RateDiv>
            <RateDiv data={detailData} type="banRate"></RateDiv>
          </style.BasicDivStyle>
        </style.BasicDivStyle>
        <style.BasicDivStyle $width="150px" /> {/* 빈 박스 */}
      </style.BasicInfoStyle>
    </>
  );
}

function SkillImg(props) {
  let skillData = JSON.parse(props.data.champSkill);
  
  let i = 1;
  let skillImgList =  Object.values(skillData).map((index) => {
    return <style.SkillImgStyle key={i++} $size="32px" src={index} />
  })
  
  return (<style.NameSkillStyle>
    {skillImgList}
  </style.NameSkillStyle>);
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
      <style.RateBoxStyle>
        <style.RateStyle>{type}</style.RateStyle>
        <style.RateStyle $weight="700">{typeResult}</style.RateStyle>
      </style.RateBoxStyle>
    </>
  )
}

function CounterDiv(props) {
  return (
    <>
      <style.CounterDivStyle>
        <style.CounterImgStyle src={props.src}></style.CounterImgStyle>
        <style.CounterInfoStyle $margin="5px 0px;"></style.CounterInfoStyle>
        <style.CounterInfoStyle $margin="0;">{props.rate}</style.CounterInfoStyle>
      </style.CounterDivStyle>
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
      let divBox = (<CounterDiv key={i} src={win[i].championImg} rate={win[i].winRate} />);
      counterList.push(divBox)
    } else {
      let divBox = (<CounterDiv key={i} src={lose[i].championImg} rate={lose[i].winRate} />);
      counterList.push(divBox)
    }
  }

  return (
    <style.CounterOlStyle>
      <style.CounterLiStyle>
        { counterList }
      </style.CounterLiStyle>
    </style.CounterOlStyle>
  );
}

export default function FirstArticle(props) {
  return (
    <>
      <style.OutBoxStyle $height="300px">
        <BasicInfo data={props} />
        <style.CounterBoxStyle>
          <style.CounterStyle $back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterLiTag data={props} win="true"></CounterLiTag>
          </style.CounterStyle>
          <style.CounterStyle $back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterLiTag data={props} win="false"></CounterLiTag>
          </style.CounterStyle>
        </style.CounterBoxStyle>
      </style.OutBoxStyle>
    </>
  );
}