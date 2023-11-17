import { useEffect } from "react";
import { useState } from "react";
import * as ds from "./detailStyle";

function Api() { // 이거 apiConstant로 변경해야함.
  const [info, setInfo] = useState([]);

  async function fetchData() {
    await fetch("http://localhost:8100/park/garen")
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
  const version = detailData.version;
  const id = detailData.id;
  const name = detailData.name;

  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ version + "/img/champion/" + id + ".png";

  return (
    <>
      <ds.BasicInfoStyle>
        <ds.BasicDivStyle $width="100px">
          <ds.BasicImgStyle src={imgUrl} />
        </ds.BasicDivStyle>
        <ds.BasicDivStyle $width="70%" $margin="0 5px 0 5px">
          <ds.BasicDivStyle $width="55%" $display="block">
            <ds.NameSkillStyle>{name}</ds.NameSkillStyle>
            <ds.NameSkillStyle>
              <SkillImg />
            </ds.NameSkillStyle>
          </ds.BasicDivStyle>
          <ds.BasicDivStyle $width="auto">
            <RateDiv type="winRate"></RateDiv>
            <RateDiv type="pickRate"></RateDiv>
            <RateDiv type="banRate"></RateDiv>
          </ds.BasicDivStyle>
        </ds.BasicDivStyle>
        <ds.BasicDivStyle $width="150px" /> {/* 빈 박스 */}
      </ds.BasicInfoStyle>
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
      list.push(<ds.SkillImgStyle key={i} src={s.type === "passive" ? pUrl :sUrl } />);
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
      <ds.RateBoxStyle>
        <ds.RateStyle>{type}</ds.RateStyle>
        <ds.RateStyle $weight="700">{typeResult}</ds.RateStyle>
      </ds.RateBoxStyle>
    </>
  )
}

export function CounterOlTag(props) {
  return (
    <>
      <ds.CounterOlStyle>
        <CounterLiTag win={props.win}></CounterLiTag>
      </ds.CounterOlStyle>
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
      <ds.CounterLiStyle>
        { counterList }
      </ds.CounterLiStyle>
    </>
  );
}

function CounterDiv(props) {
  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ props.version + "/img/champion/" + props.id + ".png";

  return (
    <>
      <ds.CounterDivStyle>
        <ds.CounterImgStyle src={imgUrl}></ds.CounterImgStyle>
        <ds.CounterInfoStyle $margin="5px 0px;">{props.name}</ds.CounterInfoStyle>
        <ds.CounterInfoStyle $margin="0;">{props.rate}</ds.CounterInfoStyle>
      </ds.CounterDivStyle>
    </>
  );
}