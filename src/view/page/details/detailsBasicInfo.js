import * as style from "./detailsStyle";
import { ChampionDetailApi as Api } from "model/constantly/apiConstants";

function BasicInfo(){
  const detailData = Api();
  const version = detailData.version;
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
            <style.NameSkillStyle>
              <SkillImg />
            </style.NameSkillStyle>
          </style.BasicDivStyle>
          <style.BasicDivStyle $width="auto">
            <RateDiv type="winRate"></RateDiv>
            <RateDiv type="pickRate"></RateDiv>
            <RateDiv type="banRate"></RateDiv>
          </style.BasicDivStyle>
        </style.BasicDivStyle>
        <style.BasicDivStyle $width="150px" /> {/* 빈 박스 */}
      </style.BasicInfoStyle>
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
      let basicUrl = "https://ddragon.leagueoflegends.com/cdn/" + version;
      let pUrl = basicUrl + "/img/passive/" + s.id;
      let sUrl = basicUrl + "/img/spell/" + s.id;
      list.push(<style.SkillImgStyle key={i} src={s.type === "passive" ? pUrl :sUrl } />);
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
      <style.RateBoxStyle>
        <style.RateStyle>{type}</style.RateStyle>
        <style.RateStyle $weight="700">{typeResult}</style.RateStyle>
      </style.RateBoxStyle>
    </>
  )
}

function CounterOlTag(props) {
  return (
    <>
      <style.CounterOlStyle>
        <CounterLiTag win={props.win}></CounterLiTag>
      </style.CounterOlStyle>
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
      <style.CounterLiStyle>
        { counterList }
      </style.CounterLiStyle>
    </>
  );
}

function CounterDiv(props) {
  let imgUrl = "https://ddragon.leagueoflegends.com/cdn/"+ props.version + "/img/champion/" + props.id + ".png";

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

export default function DetailsBasicInfo() {
  return (
    <>
      <style.OutBoxStyle $height="300px">
        <BasicInfo></BasicInfo>
        <style.CounterBoxStyle>
          <style.CounterStyle $back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterOlTag win="true"></CounterOlTag>
          </style.CounterStyle>
          <style.CounterStyle $back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterOlTag win="false"></CounterOlTag>
          </style.CounterStyle>
        </style.CounterBoxStyle>
      </style.OutBoxStyle>
      {/* <style.OutBoxStyle $height="500px"></style.OutBoxStyle> */}
      {/* <style.OutBoxStyle $height="300px"></style.OutBoxStyle> */}
    </>
  );
}