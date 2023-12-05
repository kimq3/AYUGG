import { useEffect, useState } from "react";
import * as style from "./detailsStyle";
import { ChampionDetailDataApi as DetailDataApi } from "model/constantly/apiConstants";

const detailData = await DetailDataApi();

async function BasicInfo(){
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
            <SkillImgAwait />
          </style.BasicDivStyle>
          <style.BasicDivStyle $width="auto">
            <RateDivAwait type="winRate"></RateDivAwait>
            <RateDivAwait type="pickRate"></RateDivAwait>
            <RateDivAwait type="banRate"></RateDivAwait>
          </style.BasicDivStyle>
        </style.BasicDivStyle>
        <style.BasicDivStyle $width="150px" /> {/* 빈 박스 */}
      </style.BasicInfoStyle>
    </>
  );
}

async function SkillImg() {
  let skillData = JSON.parse(detailData.champSkill);
  
  let i = 1;
  let skillImgList =  Object.values(skillData).map((index) => {
    return <style.SkillImgStyle key={i++} $size="32px" src={index} />
  })
  
  return (<>
    {skillImgList}
  </>);
}

function SkillImgAwait() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    SkillImg().then((data) => {
      setSkill(data);
    });
  }, [])

  return (
    <>
      <style.NameSkillStyle>
        {skill}
      </style.NameSkillStyle>
    </>
  );
}

async function RateDiv(props) {
  const rate = JSON.parse(detailData.rate)
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

function RateDivAwait(props) {
  const [rate, setRate] = useState([]);

  useEffect(() => {
    RateDiv(props).then((data) => {
      setRate(data);
    });
  }, [props])

  return (
    <>
      {rate}
    </>
  );
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

async function CounterLiTag(props) {
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
    <>
      <style.CounterLiStyle>
        { counterList }
      </style.CounterLiStyle>
    </>
  );
}

function CounterOlTagAwait(props) {
  const [li, setLi] = useState([]);

  useEffect(() => {
    CounterLiTag(props).then((data) => {
      setLi(data);
    });
  }, [props])

  return (
    <>
      <style.CounterOlStyle>
        {li}
      </style.CounterOlStyle>
    </>
  );
}

export default function FirstArticle() {
  const [basicInfo, setBasicInfo] = useState([]);

  useEffect(() => {
    BasicInfo().then((data) => {
      setBasicInfo(data);
    });
  }, [])

  return (
    <>
      <style.OutBoxStyle $height="300px">
        {basicInfo}
        <style.CounterBoxStyle>
          <style.CounterStyle $back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterOlTagAwait win="true"></CounterOlTagAwait>
          </style.CounterStyle>
          <style.CounterStyle $back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterOlTagAwait win="false"></CounterOlTagAwait>
          </style.CounterStyle>
        </style.CounterBoxStyle>
      </style.OutBoxStyle>
    </>
  );
}