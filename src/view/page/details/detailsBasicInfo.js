import { useEffect, useState } from "react";
import * as style from "./detailsStyle";
import { ChampionDetailApi as ChampApi } from "model/constantly/apiConstants";

const detailData = await ChampApi();
const version = detailData.version;

async function BasicInfo(){
  const id = detailData.id;
  const name = detailData.name;

  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ version + "/img/champion/" + id + ".png";

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
  const skill = detailData.skill;
  let skillImgList = [];
  
  function SkillCheck(list){
    let i = 1;
    skill && skill.map((s) => {
      let basicUrl = "https://ddragon.leagueoflegends.com/cdn/" + version;
      let pUrl = basicUrl + "/img/passive/" + s.id;
      let sUrl = basicUrl + "/img/spell/" + s.id;
      return list.push(<style.SkillImgStyle key={i++} src={s.type === "passive" ? pUrl :sUrl } />);
    });
  }

  SkillCheck(skillImgList);

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
  let type;
  let typeResult;

  switch (props.type){
    case 'winRate' :
      type = "승률";
      typeResult = detailData.winRate;
      break;
    case 'pickRate' :
      type = "픽률";
      typeResult = detailData.pickRate;
      break;
    case 'banRate' :
      type = "밴률";
      typeResult = detailData.banRate;
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

async function CounterLiTag(props) {
  let counterList = [];
  
  function CounterCheck(list){
    let id = 1;
    let version = detailData.version;
    let counterData = detailData.counter;
    counterData.map((d) => {
      if (props.win === "true") {
        if (d.win === true) {
          let divBox = ( <CounterDiv key={id++} id={d.championId} name={d.championName} rate={d.winRate} img={d.championImg} version={version}></CounterDiv> );
          return list.push(divBox);
        }
      } else {
        if (d.win === false) {
          let divBox = ( <CounterDiv key={id++} id={d.championId} name={d.championName} rate={d.winRate} img={d.championImg} version={version}></CounterDiv> );
          return list.push(divBox);
        }
      }
      return null;
    });
  }

  CounterCheck(counterList);

  return (
    <>
      <style.CounterLiStyle>
        { counterList }
      </style.CounterLiStyle>
    </>
  );
}

function CounterDiv(props) {
  const imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ props.version + "/img/champion/" + props.id + ".png";

  return (
    <>
      <style.CounterDivStyle>
        <style.CounterImgStyle src={imgUrl}></style.CounterImgStyle>
        <style.CounterInfoStyle $margin="5px 0px;">{props.name}</style.CounterInfoStyle>
        <style.CounterInfoStyle $margin="0;">{props.rate}</style.CounterInfoStyle>
      </style.CounterDivStyle>
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
      {/* <style.OutBoxStyle $height="500px"></style.OutBoxStyle> */}
      {/* <style.OutBoxStyle $height="300px"></style.OutBoxStyle> */}
    </>
  );
}