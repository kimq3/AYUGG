import * as ds from "./detailsBasicInfoStyle";
import { ChampionDetailApi as Api } from "model/constantly/apiConstants";

function BasicInfo(){
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
      let basicUrl = "https://ddragon.leagueoflegends.com/cdn/" + version;
      let pUrl = basicUrl + "/img/passive/" + s.id;
      let sUrl = basicUrl + "/img/spell/" + s.id;
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

function CounterOlTag(props) {
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

export default function DetailsBasicInfo() {
  return (
    <>
      <ds.OutBoxStyle $height="300px">
        <BasicInfo></BasicInfo>
        <ds.CounterBoxStyle>
          <ds.CounterStyle $back="rgb(49, 49, 79)">
            <div>상대하기 쉬운 챔피언</div>
            <CounterOlTag win="true"></CounterOlTag>
          </ds.CounterStyle>
          <ds.CounterStyle $back="rgb(108, 65, 65)">
            <div>상대하기 어려운 챔피언</div>
            <CounterOlTag win="false"></CounterOlTag>
          </ds.CounterStyle>
        </ds.CounterBoxStyle>
      </ds.OutBoxStyle>
      <ds.OutBoxStyle $height="500px"></ds.OutBoxStyle>
      <ds.OutBoxStyle $height="300px"></ds.OutBoxStyle>
    </>
  );
}