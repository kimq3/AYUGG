import { useEffect } from "react";
import { useState } from "react";
import {
  CounterImgStyle,
  CounterInfoStyle,
  CounterOlStyle,
  CounterDivStyle,
  CounterLiStyle,
  BasicInfoStyle,
  BasicDivStyle,
  BasicImgStyle,
  RateStyle,
  RateBoxStyle,
  NameSkillStyle,
  SkillImgStyle,
} from "./detailStyle";

function Api() {
  const [info, setInfo] = useState([]);

  async function fetchData() {
    await fetch("http://localhost:8100/garen")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.champData.data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return info;
}

export function BasicInfo(){
  const detailData = Api();
  console.log(detailData);
  const version = detailData.version;
  const id = detailData.id;
  const name = detailData.name;

  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ version + "/img/champion/" + id + ".png";

  return (
    <>
      <BasicInfoStyle>
        <BasicDivStyle width="100px">
          <BasicImgStyle src={imgUrl} />
        </BasicDivStyle>
        <BasicDivStyle width="70%" margin="0 5px 0 5px">
          <BasicDivStyle width="55%" display="block">
            <NameSkillStyle>{name}</NameSkillStyle>
            <NameSkillStyle>
              <SkillImg />
            </NameSkillStyle>
          </BasicDivStyle>
          <BasicDivStyle width="auto">
            <RateDiv type="winRate"></RateDiv>
            <RateDiv type="pickRate"></RateDiv>
            <RateDiv type="banRate"></RateDiv>
          </BasicDivStyle>
        </BasicDivStyle>
        <BasicDivStyle width="150px" /> {/* 빈 박스 */}
      </BasicInfoStyle>
    </>
  );
}

function SkillImg() {
  const detailData = Api();
  let version = detailData.version;
  let skill = detailData.skill;
  let skillImgList = [];
  
  function SkillCheck(list){
    let i = 1;
    skill && skill.map((s) => {
      let pUrl = "https://ddragon.leagueoflegends.com/cdn/" + version + "/img/passive/" + s.id;
      let sUrl = "https://ddragon.leagueoflegends.com/cdn/" + version + "/img/spell/" + s.id;
      list.push(<SkillImgStyle key={i} src={s.type === "passive" ? pUrl :sUrl } />);
      i++;
    });
  }

  SkillCheck(skillImgList);

  return (<>
    {skillImgList}
  </>);
}

function RateDiv(props) {
  const detailData = Api();
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
  }

  return (
    <>
      <RateBoxStyle>
        <RateStyle>{type}</RateStyle>
        <RateStyle weight="700">{typeResult}</RateStyle>
      </RateBoxStyle>
    </>
  )
}

export function CounterOlTag(props) {
  return (
    <>
      <CounterOlStyle>
        <CounterLiTag win={props.win}></CounterLiTag>
      </CounterOlStyle>
    </>
  );
}

function CounterLiTag(props) {
  const detailData = Api();
  let counterList = [];
  
  function CounterCheck(list){
    let id = 1;
    let version = detailData.version;
    let counterData = detailData.counter;
    counterData && counterData.map((d) => {
      if (props.win === "true") {
        if (d.win === true) {
          let divBox = ( <CounterDiv key={id} id={d.championId} name={d.championName} rate={d.winRate} img={d.championImg} version={version}></CounterDiv> );
          list.push(divBox);
          id++;
        }
      } else {
        if (d.win === false) {
          let divBox = ( <CounterDiv key={id} id={d.championId} name={d.championName} rate={d.winRate} img={d.championImg} version={version}></CounterDiv> );
          list.push(divBox);
          id++;
        }
      }
    });
  }

  CounterCheck(counterList);

  return (
    <>
      <CounterLiStyle>
        { counterList }
      </CounterLiStyle>
    </>
  );
}

function CounterDiv(props) {
  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ props.version + "/img/champion/" + props.id + ".png";

  return (
    <>
      <CounterDivStyle>
        <CounterImgStyle src={imgUrl}></CounterImgStyle>
        <CounterInfoStyle margin="5px 0px;">{props.name}</CounterInfoStyle>
        <CounterInfoStyle margin="0;">{props.rate}</CounterInfoStyle>
      </CounterDivStyle>
    </>
  );
}