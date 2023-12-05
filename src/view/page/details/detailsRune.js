import { RuneApi, ChampionDetailDataApi as ChampDetailApi } from "model/constantly/apiConstants";
import * as styled from "./detailsStyle";
import { useEffect, useMemo, useState } from "react";

const urlStart = "https://ddragon.leagueoflegends.com/cdn/";
const basicRuneImgUrl = urlStart + "img/";
const detailData = await ChampDetailApi();
const runeApiData = await RuneApi();

// ★ 룬 ★ -----------------------------------------
// 룬 api에서 해당 챔피언에게 해당되는 룬만 정제해서 뱉어냄
function GetRuneData(detail, runeData, version) {
  const ver = version === '1' ? detail.version1 : detail.version2
  let data;
  let mainTitle;
  let subTitle;
  let mainId;
  let mainLine1;
  let mainLine2;
  let mainLine3;
  let subLine1;
  let subLine2;

  for(let i = 0; i < runeData.length; i++){
    if(runeData[i].id.toString() === ver.mainTitle){
      mainTitle = basicRuneImgUrl + runeData[i].icon;
      let slots = runeData[i].slots;

      for(let j = 0; j < slots.length; j++){
        let slotsRunes = slots[j].runes;
        
        for(let k = 0; k < slotsRunes.length; k++){
          let runeId = slotsRunes[k].id.toString();
          let icon = basicRuneImgUrl + slotsRunes[k].icon
          if(runeId === ver.mainRune.id) { mainId = icon }
          if(runeId === ver.mainRune.line1) { mainLine1 = icon }
          if(runeId === ver.mainRune.line2) { mainLine2 = icon }
          if(runeId === ver.mainRune.line3) { mainLine3 = icon }
        }
      }
    }
    if(runeData[i].id.toString() === ver.subTitle){
      subTitle = basicRuneImgUrl + runeData[i].icon;
      let slots = runeData[i].slots;

      for(let j = 0; j < slots.length; j++){
        let slotsRunes = slots[j].runes;
        
        for(let k = 0; k < slotsRunes.length; k++){
          let runeId = slotsRunes[k].id.toString();
          let icon = basicRuneImgUrl + slotsRunes[k].icon
          if(runeId === ver.subRune.line1) { subLine1 = icon }
          if(runeId === ver.subRune.line2) { subLine2 = icon }
        }
      }
    }
  }

  data = {
    "mainTitle" : mainTitle,
    "subTitle" : subTitle,
    "winRate" : ver.winRate,
    "pickRate" : ver.pickRate.split('\n')[0],
    "mainRune" : {
      "id" : mainId,
      "line1" : mainLine1,
      "line2" : mainLine2,
      "line3" : mainLine3,
    },
    "subRune" : {
      "line1" : subLine1,
      "line2" : subLine2,
    }
  }

  return data;
}

// 룬 이미지 공통태그
function RuneImgTag(props) {
  const boxSize = props.bSize;
  const boxMain = props.bMain;
  const imgSize = props.iSize;
  const imgSrc = props.iSrc;
  const selected = props.selected;
  const isNull = props.isNull;

  return (
    <styled.NavRuneImgBoxStyle $size={boxSize} $main={boxMain} $selected={selected} $isNull={isNull}>
      <styled.NavRuneImgStyle $size={imgSize} src={imgSrc} $selected={selected}/>
    </styled.NavRuneImgBoxStyle>
  )
}

// 룬 왼쪽에 대표적인 룬 2개를 보여주는 NavBar
async function NavRune(props) {
  let getRune = GetRuneData(JSON.parse(detailData.rune), runeApiData, props.ver);
  let selected = props.selected;

  return (
      <styled.NavRuneStyle $selected={selected}>
        <styled.NavRuneWrappingDivStyle>
          <styled.Center>
            <RuneImgTag bSize="40px" bMain="true" iSize="32px" iSrc={getRune.mainTitle} selected={selected} />
            <RuneImgTag bSize="32px" iSize="24px" iSrc={getRune.subTitle} selected={selected} />
          </styled.Center>
            <RuneRateDiv rate="승률" value={getRune.winRate} /> 
            <RuneRateDiv rate="픽률" value={getRune.pickRate} />
        </styled.NavRuneWrappingDivStyle>
      </styled.NavRuneStyle>
  );
}

// NavRune에서 해당 룬의 비율
function RuneRateDiv(props){
  return (
    <>
      <styled.RuneRateBoxStyle>
        <styled.RuneRateDivStyle $size="30%">{props.rate}</styled.RuneRateDivStyle>
        <styled.RuneRateDivStyle>{props.value}</styled.RuneRateDivStyle>
      </styled.RuneRateBoxStyle>
    </>
  )
}

async function DetailRuneFirstBox(props) {
  let getRune = GetRuneData(JSON.parse(detailData.rune), runeApiData, props.ver);
  let selected = "true"
  let runeIdList = [];
  let line1List = [];
  let line2List = [];
  let line3List = [];

  const ver = props.ver === '1' ? JSON.parse(detailData.rune).version1 : JSON.parse(detailData.rune).version2

  for(let i = 0; i < runeApiData.length; i++){
    if(runeApiData[i].id.toString() === ver.mainTitle){
      let slots = runeApiData[i].slots;

      for(let j = 0; j < slots.length; j++){
        let slotsRunes = slots[j].runes;
        
        for(let k = 0; k < slotsRunes.length; k++){
          let runeId = slotsRunes[k].id.toString();
          let icon = basicRuneImgUrl + slotsRunes[k].icon
          let boxSize = "32px"
          let imgSize = "32px"
          switch (j){
            case 0 :
              if(runeId === ver.mainRune.id) {              
                runeIdList.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={getRune.mainRune.id} selected={selected} />)
              } else {
                runeIdList.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            case 1 :
              if(runeId === ver.mainRune.line1) { 
                line1List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={getRune.mainRune.line1} selected={selected} />)
              } else {
                line1List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            case 2 :
              if(runeId === ver.mainRune.line2) { 
                line2List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={getRune.mainRune.line2} selected={selected} />)
              } else {
                line2List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            case 3 :
              if(runeId === ver.mainRune.line3) { 
                line3List.push(<RuneImgTag key={k+15} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={getRune.mainRune.line3} selected={selected} />)
              } else {
                line3List.push(<RuneImgTag key={k+15} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            default :
              break;
          }
        }
      }
    }
  }

  return (
    <>
      <styled.DetailRuneBoxStyle>
        <styled.RuneTitleBoxStyle>
          <RuneImgTag bSize="40px" bMain="true" iSize="32px" iSrc={getRune.mainTitle} selected={selected} />
        </styled.RuneTitleBoxStyle>
        <styled.RuneIdBoxStyle> {runeIdList} </styled.RuneIdBoxStyle>
        <styled.RuneLineBoxStyle>
          <styled.LineBox> {line1List} </styled.LineBox>
          <styled.LineBox> {line2List} </styled.LineBox>
          <styled.LineBox> {line3List} </styled.LineBox>
        </styled.RuneLineBoxStyle>
      </styled.DetailRuneBoxStyle>
    </>
  )
}

async function DetailRuneSecondBox(props) {
  let getRune = GetRuneData(JSON.parse(detailData.rune), runeApiData, props.ver);
  let selected = "true"

  let line1List = [];
  let line2List = [];
  let line3List = [];

  const ver = props.ver === '1' ? JSON.parse(detailData.rune).version1 : JSON.parse(detailData.rune).version2
  for(let i = 0; i < runeApiData.length; i++){
    if(runeApiData[i].id.toString() === ver.subTitle){
      let slots = runeApiData[i].slots;
      let lineImg = getRune.subRune.line1;
      for(let j = 0; j < slots.length; j++){
        let slotsRunes = slots[j].runes;
        
        for(let k = 0; k < slotsRunes.length; k++){
          let runeId = slotsRunes[k].id.toString();
          let icon = basicRuneImgUrl + slotsRunes[k].icon
          let boxSize = "32px"
          let imgSize = "32px"
          
          switch (j){
            case 0 :
              break;
            case 1 :
              if(runeId === ver.subRune.line1 || runeId === ver.subRune.line2) { 
                line1List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={lineImg} selected={selected} />)
                lineImg=getRune.subRune.line2;
              } else {
                line1List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            case 2 :
              if(runeId === ver.subRune.line1 || runeId === ver.subRune.line2) { 
                line2List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={lineImg} selected={selected} />)
                lineImg=getRune.subRune.line2;
              } else {
                line2List.push(<RuneImgTag key={runeId} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            case 3 :
              if(runeId === ver.subRune.line1 || runeId === ver.subRune.line2) { 
                line3List.push(<RuneImgTag key={k+15} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={lineImg} selected={selected} />)
              } else {
                line3List.push(<RuneImgTag key={k+15} bSize={boxSize} bMain="true" iSize={imgSize} iSrc={icon} selected="" />)
              }
              break;
            default :
              break;
          }
        }
      }
    }
  }

  return (
    <>
      <styled.DetailRuneBoxStyle>
        <styled.RuneTitleBoxStyle />
        <styled.RuneIdBoxStyle>
          <RuneImgTag bSize="32px" bMain="true" iSize="28px" iSrc={getRune.subTitle} selected={selected} />
        </styled.RuneIdBoxStyle>
        <styled.RuneLineBoxStyle>
          <styled.LineBox> {line1List} </styled.LineBox>
          <styled.LineBox> {line2List} </styled.LineBox>
          <styled.LineBox> {line3List} </styled.LineBox>
        </styled.RuneLineBoxStyle>
      </styled.DetailRuneBoxStyle>
    </>
  )
}

function PerkImg(id) {
  let data = {
    id: id,
    icon: 'assets/images/perk/' + id + '.png'
  }
  return data;
}

async function DetailRuneThirdBox(props) {
  const statsData = props.ver === '1' ? JSON.parse(detailData.rune).version1.stats : JSON.parse(detailData.rune).version2.stats

  function Perk(img1, img2, img3, id) {
    let imgData = [];
    imgData.push(img1);
    imgData.push(img2);
    imgData.push(img3);
    let dataList = [];
    let i = 0;

    imgData.map((index) => {
      let selected = index.id.toString() === id ? "true" : "false";
      let src = index.icon;
      return dataList.push(<RuneImgTag key={i++} bSize="32px" bMain="true" iSize="24px" iSrc={src} selected={selected} />);
    })
    
    return dataList;
  }

  const perk1 = Perk(PerkImg(5008), PerkImg(5005), PerkImg(5007), statsData.line1);
  const perk2 = Perk(PerkImg(5008), PerkImg(5002), PerkImg(5003), statsData.line2);
  const perk3 = Perk(PerkImg(5001), PerkImg(5002), PerkImg(5003), statsData.line3);

  return (
    <>
      <styled.DetailRuneBoxStyle>
        <styled.RuneTitleBoxStyle />
        <styled.RuneIdBoxStyle />
        <styled.RuneLineBoxStyle>
          <styled.LineBox> {perk1} </styled.LineBox>
          <styled.LineBox> {perk2} </styled.LineBox>
          <styled.LineBox> {perk3} </styled.LineBox>
        </styled.RuneLineBoxStyle>
      </styled.DetailRuneBoxStyle>
    </>
  )
}


// ♣ 스킬 ♣ -----------------------------------------
async function Skill() {
  const skillMaster = JSON.parse(detailData.master);
  const skillSeq = JSON.parse(detailData.skillSeq).skillSeqList;
  
  // 스킬 마스터리
  const arrow = 'assets/images/arrow-icon-24.svg';
  // const arrowImg = <styled.SkillImgStyle $size="32px" src={arrow} />
  let masterList = [];

  function master(key, src) {
    let size = "32px";
    let data = (
      <styled.SkillBoxStyle key={key} $size={size}>
        <styled.SkillImgStyle $size={size} src={src} />
        <styled.SkillKeyStyle>{key}</styled.SkillKeyStyle>
      </styled.SkillBoxStyle>
    )
    return data;
  }

  masterList.push(master(skillMaster.masterA.key, skillMaster.masterA.src));
  masterList.push(<styled.SkillImgStyle key={0} $size="32px" src={arrow} />);
  masterList.push(master(skillMaster.masterB.key, skillMaster.masterB.src));
  masterList.push(<styled.SkillImgStyle key={1} $size="32px" src={arrow} />);
  masterList.push(master(skillMaster.masterC.key, skillMaster.masterC.src));
  

  // 스킬 순서
  let q = 0; let w = 0; let e = 0;

  for(let i = 0; i < skillSeq.length; i++) {
    switch (skillSeq[i]){
      case 'Q' :
        q++;
        break;
      case 'W' :
        w++;
        break;
      case 'E' :
        e++;
        break;
      default:
        break;
    } 
  }

  let max = q > w ? (q > e ? q : (e > w ? e : w)) : ( w > e ? w : (e > q ? e : q));
  
  let masterSkill = skillMaster.masterA.key;
  let masterSeqList = [];
  let count = 0;
  for(let i = 0; i < skillSeq.length; i++) {
    let master = skillSeq[i] === masterSkill ? "true" : "false";
    count = skillSeq[i] === masterSkill ? count + 1 : (count === max ? count + 1 : count);
    let maxCount = count === max ? "true" : "false";

    let data = (
      <styled.OrderBoxStyle key={i}>
        <styled.OrderSeqStyle $max={maxCount}>{i+1}</styled.OrderSeqStyle>
        <styled.OrderSkillStyle $max={maxCount} $master={master}>{skillSeq[i]}</styled.OrderSkillStyle>
      </styled.OrderBoxStyle>
    );
    masterSeqList.push(data);
  }

  return (
    <>
      <styled.SkillWrappingBox>
        <styled.SkillMasterBoxStyle>
          {masterList}
        </styled.SkillMasterBoxStyle>
        <styled.SkillMasterBoxStyle>
          {masterSeqList}
        </styled.SkillMasterBoxStyle>
      </styled.SkillWrappingBox>
    </>
  )
}
// ♣ 스킬 ♣ -----------------------------------------


// 비동기 api를 담아낸 코드를 useState로 받아와서 react-child로 받아내는 함수
function ArticleLeftBox() {
  const [detailRuneFirst, setDetailRuneFirst] = useState();
  const [detailRuneSecond, setDetailRuneSecond] = useState();
  const [detailRuneThird, setDetailRuneThird] = useState();
  const [navRuneV1, setNavRuneV1] = useState([]);
  const [navRuneV2, setNavRuneV2] = useState([]);
  const [skill, setSkill] = useState();

  let v1Props = useMemo(() => {
    return {
      ver: "1",
      selected: "true"
    };
  }, []);

  let v2Props = useMemo(() => {
    return {
      ver: "2",
      selected: "false"
    };
  }, []);

  let detailProps = useMemo(() => {
    return {
      ver: "1",
    }
  }, [])

  useEffect(() => {
    NavRune(v1Props).then((data) => {
      setNavRuneV1(data);
    });

    NavRune(v2Props).then((data) => {
      setNavRuneV2(data);
    });
    
    DetailRuneFirstBox(detailProps).then((data) => {
      setDetailRuneFirst(data);
    })

    DetailRuneSecondBox(detailProps).then((data) => {
      setDetailRuneSecond(data);
    })

    DetailRuneThirdBox(detailProps).then((data) => {
      setDetailRuneThird(data);
    })

    Skill().then((data) => {
      setSkill(data);
    });
  }, [v1Props, v2Props, detailProps])

  function ClickEvent() {
    if(detailProps.ver === "1") {
      v1Props.selected = "false";
      v2Props.selected = "true";
      detailProps.ver = "2"
      DetailRuneFirstBox(detailProps).then((data) => {
        setDetailRuneFirst(data);
      })
  
      DetailRuneSecondBox(detailProps).then((data) => {
        setDetailRuneSecond(data);
      })
  
      DetailRuneThirdBox(detailProps).then((data) => {
        setDetailRuneThird(data);
      })
    } else {
      v1Props.selected = "true";
      v2Props.selected = "false";
      detailProps.ver = "1"
      DetailRuneFirstBox(detailProps).then((data) => {
        setDetailRuneFirst(data);
      })
  
      DetailRuneSecondBox(detailProps).then((data) => {
        setDetailRuneSecond(data);
      })
  
      DetailRuneThirdBox(detailProps).then((data) => {
        setDetailRuneThird(data);
      })
    }

    NavRune(v1Props).then((data) => {
      setNavRuneV1(data);
    });
    NavRune(v2Props).then((data) => {
      setNavRuneV2(data);
    });
  }

  return (
    <>
      <styled.ArticleBoxStyle $width="68%">
        <styled.RuneArticleBoxStyle $height="30px">
          <styled.SubTitleBox>추천 룬 세팅</styled.SubTitleBox>
        </styled.RuneArticleBoxStyle>
        
        <styled.RuneArticleBoxStyle $height="70%" $display="flex">
          <styled.NavButtonStyle onClick={ClickEvent}>
            <styled.RuneLeftNavBoxStyle>
              {navRuneV1}
              {navRuneV2}
            </styled.RuneLeftNavBoxStyle>
          </styled.NavButtonStyle>

          <styled.DetailRuneWrappingBoxStyle>
            {detailRuneFirst}
            {detailRuneSecond}
            {detailRuneThird}
          </styled.DetailRuneWrappingBoxStyle>
        </styled.RuneArticleBoxStyle>

        <styled.RuneArticleBoxStyle $height="30px">
          <styled.SubTitleBox>스킬 빌드</styled.SubTitleBox>
        </styled.RuneArticleBoxStyle>

        <styled.RuneArticleBoxStyle $height="calc( 30% - 81px )" $last="true">
          {skill}
        </styled.RuneArticleBoxStyle>
      </styled.ArticleBoxStyle>
    </>
  )
}

function ArticleRightBox() {

  return (
    <styled.ArticleBoxStyle $width="30%">
      <ItemDivTitle fav="spell" />
      <ItemDivTitle fav="start" />
      <ItemDivTitle fav="shoes" />
      <ItemDivTitle />
    </styled.ArticleBoxStyle>
  )
}

function ItemDivTitle(props) {
  const [favImg, setFavImg] = useState();

  useEffect(() => {
    ItemDivData(props).then((data) => {
      setFavImg(data);
    });
  }, [props])

  let fav;
  switch (props.fav){
    case 'spell' :
      fav = "스펠 선호도";
      break;
    case 'start' :
      fav = "시작 아이템";
      break;
    case 'shoes' :
      fav = "신발 선호도";
      break;
    default:
      fav = "";
      break;
  }  

  let data = props.fav ? (
    <styled.FavDivStyle>
      <styled.FavTitleDivStyle>
        <styled.FavTitleStyle $seq="1" $size="50%" $backColor = "rgb(55, 55, 55)">{fav}</styled.FavTitleStyle>
        <styled.FavTitleStyle $seq="2" $size="25%" $backColor = "rgb(96, 96, 240)">픽률</styled.FavTitleStyle>
        <styled.FavTitleStyle $seq="3" $size="25%" $backColor = "rgb(255, 26, 26)">승률</styled.FavTitleStyle>
      </styled.FavTitleDivStyle>
      {favImg}
    </styled.FavDivStyle>
  ) : <styled.FavDivStyle /> // 박스는 4개가 깔끔한데 정보값은 3개라 일단 비워둠

  return data;
}

async function ItemDivData(props) {
  let fav;
  let ver1;
  let ver2;
  let dataVer1;
  let dataVer2;

  function imgData(ver) {
    return (
      <>
        <styled.FavImgBoxStyle>
          <styled.FavImgStyle src={ver.img1} />
          <styled.FavImgStyle src={ver.img2} />
        </styled.FavImgBoxStyle>
      </>
    )
  }

  function getTag(data, ver) {
    return (
      <styled.FavVerBoxStyle>
        <styled.FavVerDataStyle $size="50%">
          {data}
        </styled.FavVerDataStyle>
        <styled.FavVerDataStyle $size="25%">{ver.pickRate}</styled.FavVerDataStyle>
        <styled.FavVerDataStyle $size="25%">{ver.pickRate}</styled.FavVerDataStyle>
      </styled.FavVerBoxStyle>
    )
  }

  switch (props.fav){
    case 'spell' :
      fav = JSON.parse(detailData.spell);
      ver1 = fav.version1;
      ver2 = fav.version2;
      dataVer1 =getTag(imgData(ver1), ver1);
      dataVer2 =getTag(imgData(ver2), ver2);
      break;
    case 'start' :
      fav = JSON.parse(detailData.startItem);
      ver1 = fav.version1;
      ver2 = fav.version2;
      dataVer1 =getTag(imgData(ver1), ver1);
      dataVer2 =getTag(imgData(ver2), ver2);
      break;
    case 'shoes' :
      fav = JSON.parse(detailData.shoes);
      ver1 = fav.version1;
      ver2 = fav.version2;
      let data1 = (<>
        <styled.FavImgBoxStyle>
          <styled.FavImgStyle src={ver1.img} />
        </styled.FavImgBoxStyle>
      </>)
      let data2 = (<>
        <styled.FavImgBoxStyle>
          <styled.FavImgStyle src={ver2.img} />
        </styled.FavImgBoxStyle>
      </>)
      dataVer1 =getTag(data1, ver1);
      dataVer2 =getTag(data2, ver2);
      break;
    default:
      fav = null;
      break;
  }

  return (
    <styled.FavDataDivStyle>
      {dataVer1}
      {dataVer2}
    </styled.FavDataDivStyle>
  )
}

// detailsMain.js에 뱉어내는 
export default function SecondArticle() {
  return (
    <>
      <styled.OutBoxStyle $height="500px">
        <ArticleLeftBox />
        <ArticleRightBox />
      </styled.OutBoxStyle>
    </>
  );
}
