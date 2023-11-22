import { ChampionDetailApi as ChampApi, RuneApi } from "model/constantly/apiConstants";
import * as style from "./detailsStyle";
import { useEffect, useState } from "react";

const detailData = await ChampApi();
const runeApiData = await RuneApi();
const version = detailData.version;
const getRune = GetRuneData(detailData, runeApiData);
const urlStart = "https://ddragon.leagueoflegends.com/cdn/";
const basicRuneImgUrl = urlStart + "img/";
const basicSkillImgUrl = urlStart + version + "/img/spell/";
const basicSpellImgUrl = urlStart + version + "/img/item/";
// ★ 룬 ★ -----------------------------------------
// 룬 api에서 해당 챔피언에게 해당되는 룬만 정제해서 뱉어냄
function GetRuneData(detailData, runeData) {
  let runeVer1 = [];
  let runeVer2 = [];
  let runeList = [];

  try {
    let rawData = detailData.rune;

    if (rawData !== undefined) {
    const runeVersion1 = rawData.version1;
    const runeVersion2 = rawData.version2;

    let dataA = ExtractData(runeVersion1);
    let rateDataA = {
      winRate: "승률",
      winValue: runeVersion1.winRate,
      pickRate: "픽률",
      pickValue: runeVersion1.pickRate
    }
    dataA.push(rateDataA);

    let dataB = ExtractData(runeVersion2, rawData);
    let rateDataB = {
      winRate: "승률",
      winValue: runeVersion2.winRate,
      pickRate: "픽률",
      pickValue: runeVersion2.pickRate
    }
    dataB.push(rateDataB);

    dataA.map((index) => {
      return runeVer1.push(index);
    })
    dataB.map((index) => {
      return runeVer2.push(index);
    })
    runeList.push(runeVer1);
    runeList.push(runeVer2);
    }

    function ExtractData (rune, rawData) {
      let mainRuneList = [];
      let lowMainRuneList = [];
      let mainRune = [];
      let subRuneList = [];
      let lowSubRuneList = [];
      let subRune = [];
      let allRuneData = [];
    
      runeData && runeData.map((index) => {
        if(String(index.id) === rune.mainTitle) {
          mainRune.push(index.icon);
          index.slots.map((items) => {
            let lowRune = [];
            items.runes.map((runeInfo) => {
              let data = {
                id: runeInfo.id,
                icon: runeInfo.icon
              }
              return lowRune.push(data);
            })
            return lowMainRuneList.push(lowRune);
          })
          mainRuneList.push(mainRune);
          mainRuneList.push(lowMainRuneList);
        }
    
        if(String(index.id) === rune.subTitle) {
          subRune.push(index.icon);
          index.slots.map((items) => {
            let lowRune = [];
            items.runes.map((runeInfo) => {
              let data = {
                id: runeInfo.id,
                icon: runeInfo.icon
              }
              return lowRune.push(data);
            })
            return lowSubRuneList.push(lowRune);
          })
          subRuneList.push(subRune);
          subRuneList.push(lowSubRuneList);
        }

        return null;
      })

      allRuneData.push(mainRuneList);
      allRuneData.push(subRuneList);
      
      return allRuneData;
    }
  } catch (error) {
    window.alert(error);
  }

  return runeList;
}

// 룬 왼쪽에 대표적인 룬 2개를 보여주는 NavBar
async function NavRune(props) {
  let ver = props.ver
  let runeData = ver === "ver1" ? getRune[0] : getRune[1];
  let rateData = runeData[2];
  let selected = props.selected;
  let mainRuneUrl = basicRuneImgUrl + runeData[0][0];
  let subRuneUrl = basicRuneImgUrl + runeData[1][0];

  return (
      <style.NavRuneStyle $selected={selected}>
        <style.NavRuneWrappingDivStyle>
          <style.Center>
            <RuneImgTag bSize="40px" bMain="true" iSize="32px" iSrc={mainRuneUrl} selected="true"></RuneImgTag>
            <RuneImgTag bSize="32px" iSize="24px" iSrc={subRuneUrl} selected="true"></RuneImgTag>
          </style.Center>
            <RuneRateDiv rate={rateData.winRate} value={rateData.winValue} /> 
            <RuneRateDiv rate={rateData.pickRate} value={rateData.pickValue} />
        </style.NavRuneWrappingDivStyle>
      </style.NavRuneStyle>
  );
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
    <style.NavRuneImgBoxStyle $size={boxSize} $main={boxMain} $selected={selected} $isNull={isNull}>
      <style.NavRuneImgStyle $size={imgSize} src={imgSrc} $selected={selected}/>
    </style.NavRuneImgBoxStyle>
  )
}

// NavRune에서 해당 룬의 비율
function RuneRateDiv(props){
  return (
    <>
      <style.RuneRateBoxStyle>
        <style.RuneRateDivStyle $size="30%">{props.rate}</style.RuneRateDivStyle>
        <style.RuneRateDivStyle>{props.value}</style.RuneRateDivStyle>
      </style.RuneRateBoxStyle>
    </>
  )
}

// NavRune에서 선택한 룬의 상세정보
function DetailRune(props) {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const ver = props.ver;
  
  useEffect(() => {
    const firstProps = {
      ver: ver,
      type: "first"
    };
    const secondProps = {
      ver: ver,
      type: "second"
    };
    const thirdProps = {
      ver: ver,
      type: "third"
    };
    DetailRuneDiv(firstProps).then((data) => {
      setFirst(data);
    });
    DetailRuneDiv(secondProps).then((data) => {
      setSecond(data);
    });
    DetailRuneDiv(thirdProps).then((data) => {
      setThird(data);
    });
  }, [ver])

  return(
    <>
      <style.RuneRightDetailBoxStyle>    
        {first}
        {second}
        {third}
      </style.RuneRightDetailBoxStyle>
    </>
  );
}

async function DetailRuneDiv(props) {
  const ver = props.ver;
  const runeApiData = ver === "ver1" ? getRune[0] : getRune[1];
  const mainRuneApiData = props.type === "first" ? runeApiData[0] : (props.type === "second" ? runeApiData[1] : null);
  const mainRuneUrl = props.type === "third" ? null : basicRuneImgUrl + mainRuneApiData[0];
  const subRuneApiData = props.type === "third" ? null : mainRuneApiData[1];
  
  const runeVerData = ver === "ver1" ? detailData.rune.version1 : detailData.rune.version2;
  const statsData = runeVerData.stats;
  const selectedData = props.type === "first" ? runeVerData.mainRune : (props.type === "second" ? runeVerData.subRune : runeVerData.stats)
  const dataLength = Object.keys(selectedData).length;

  const noLine = false;
  const line = true;

  const subRune = props.type === "first"
   ? Line(subRuneApiData[0], selectedData.id, noLine)
   : (props.type === "second"
    ? (<RuneImgTag bSize="36px" bMain="true" iSize="28px" iSrc={mainRuneUrl} selected="true" />)
    : (<RuneImgTag bSize="42px" bMain="true" iSize="34px" isNull="true" />));
  
  function PerkImg(id) {
    let data = {
      id: id,
      icon: `${process.env.PUBLIC_URL}` + 'assets/images/perk/' + id + '.png'
    }
    return data;
  }

  const perk1 = Perk(PerkImg(5008), PerkImg(5005), PerkImg(5007), statsData.line1);
  const perk2 = Perk(PerkImg(5008), PerkImg(5002), PerkImg(5003), statsData.line2);
  const perk3 = Perk(PerkImg(5001), PerkImg(5002), PerkImg(5003), statsData.line3);

  function LineId(id, index, id2) {
    return dataLength === 2
      ? Line(subRuneApiData[index], id, line, id2)
      : Line(subRuneApiData[index], id, line);
  }

  const line1 = props.type === "third"
    ? perk1
    : (dataLength === 2
        ? LineId(selectedData.line1, 1, selectedData.line2)
        : LineId(selectedData.line1, 1));
  const line2 = props.type === "third"
  ? perk2
  : (dataLength === 2 
    ? LineId(selectedData.line1, 2, selectedData.line2) 
    : LineId(selectedData.line2, 2));
  const line3 =props.type === "third"
  ? perk3
  : (dataLength === 2
      ? LineId(selectedData.line1, 3, selectedData.line2)
      : LineId(selectedData.line3, 3));

  function Line(rune, id, line, id2) {
    let i = 0;
    let imgList = [];
    rune.map((index) => {
      let imgUrl = basicRuneImgUrl + index.icon
      let data;
      if(line === false){       
        if(id2 ? index.id.toString() === id || index.id.toString() === id2 : index.id.toString() === id){
          data = <RuneImgTag key={i} bSize="36px" bMain="true" iSize="28px" iSrc={imgUrl} selected="true" />
        } 
        else {
          data = <RuneImgTag key={i} bSize="36px" bMain="true" iSize="28px" iSrc={imgUrl} selected="false" />
        }
      }
      else {
        if(id2 ? index.id.toString() === id || index.id.toString() === id2 : index.id.toString() === id){
          data = <style.NavRuneImgStyle key={i} $size="32px" src={imgUrl} $selected="true"/>
        }
        else {
          data = <style.NavRuneImgStyle key={i} $size="32px" src={imgUrl} $selected="false"/>
        }
      }
      i++;
      return imgList.push(data);
    })
    return imgList;
  }

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

  const firstBox = props.type === "first"
   ? <RuneImgTag bSize="40px" bMain="true" iSize="32px" iSrc={mainRuneUrl} selected="true" />
   : <RuneImgTag bSize="40px" bMain="true" iSize="32px" isNull="true" />

  return (
    <style.RuneDetailBoxStyle>
      {/* 룬 종류 - 정밀, 마법, 지배 ... */}
      <style.RuneDetailMainTitleStyle>
        {firstBox}
      </style.RuneDetailMainTitleStyle>
      {/* 해당 룬의 특성? - 집공, 치속, 기발 ... */}
      <style.RuneDetailSubTitleStyle>
        {subRune}
      </style.RuneDetailSubTitleStyle>
      {/* 특성의 특성 - 침착, 강인함, 최후의 일격 ... */}
      <style.RuneStatsStyle>
        {line1}
      </style.RuneStatsStyle>
      <style.RuneStatsStyle>
        {line2}
      </style.RuneStatsStyle>
      <style.RuneStatsStyle>
        {line3}
      </style.RuneStatsStyle>
    </style.RuneDetailBoxStyle>
  )
}
// ★ 룬 ★ -----------------------------------------


// ♣ 스킬 ♣ -----------------------------------------
async function Skill() {
  const skillTree = detailData.skillTree;
  const skillMaster = skillTree.master;
  const skillOrder = skillTree.order;

  // 스킬 마스터리
  let arrow = `${process.env.PUBLIC_URL}` + 'assets/images/arrow-icon-24' + '.svg';
  let masterList = [];

  skillMaster.map((index) => {
    let src = basicSkillImgUrl + index.id;
    let size = "32px";
    let key = index.key;
    let seq = index.seq;
    let boxId = "box" + seq;
    let arrowId = "arrow" + seq;

    let arrowImg = <style.SkillImgStyle key={arrowId} $size={size} src={arrow} />
    
    let data = (
      <style.SkillBoxStyle key={boxId} $size={size}>
        <style.SkillImgStyle $size={size} src={src} />
        <style.SkillKeyStyle>{key}</style.SkillKeyStyle>
      </style.SkillBoxStyle>
    )
    masterList.push(data);

    return seq === '3' ? null : masterList.push(arrowImg);
  })
  // ▲▲▲▲▲▲▲▲▲▲ 스킬 마스터리

  // 스킬 순서
  let q = 0; let w = 0; let e = 0; let r = 0;

  skillOrder.map((index) => {
    switch (index){
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
        r++;
        break;
    }  
    return;
  })
  let max = q > w ? (q > e ? q : (e > w ? e : w)) : ( w > e ? w : (e > q ? e : q));
  
  let seqKey = 1;
  let masterCount = 0;
  let masterSkill = skillMaster[0].key;
  let masterSeqList = [];

  skillOrder.map((index) => {
    masterCount = masterSkill === index ? (masterCount+1) : masterCount;
    let maxCount = masterCount === max && masterSkill === index ? "max" : null;

    let data = OrderBox(index, seqKey, maxCount, masterSkill)
    seqKey++
    return masterSeqList.push(data);
  })

  function OrderBox(index, key, max, masterSkill){
    let master = index === masterSkill ? "true" : "false";
    let data = (
        <style.OrderBoxStyle key={key}>
          <style.OrderSeqStyle $max={max}>{key}</style.OrderSeqStyle>
          <style.OrderSkillStyle $max={max} $master={master}>{index}</style.OrderSkillStyle>
        </style.OrderBoxStyle>
    )
    return data;
  }
  // ▲▲▲▲▲▲▲▲▲▲ 스킬 순서

  return (
    <>
      <style.SkillWrappingBox>
        <style.SkillMasterBoxStyle>
          {masterList}
        </style.SkillMasterBoxStyle>
        <style.SkillMasterBoxStyle>
          {masterSeqList}
        </style.SkillMasterBoxStyle>
      </style.SkillWrappingBox>
    </>
  )
}
// ♣ 스킬 ♣ -----------------------------------------


// 비동기 api를 담아낸 코드를 useState로 받아와서 react-child로 받아내는 함수
function ArticleLeftBox() {
  const [detailRune, setDetailRune] = useState();
  const [navRuneV1, setNavRuneV1] = useState([]);
  const [navRuneV2, setNavRuneV2] = useState([]);
  const [skill, setSkill] = useState();
  
  let detailV1 = <DetailRune ver="ver1" />;
  let detailV2 = <DetailRune ver="ver2" />;

  let v1Props = {
    ver: "ver1",
    selected: "true"
  }
  let v2Props = {
    ver: "ver2",
    selected: "false"
  }

  useEffect(() => {
    NavRune(v1Props).then((data) => {
      setNavRuneV1(data);
    });
    NavRune(v2Props).then((data) => {
      setNavRuneV2(data);
    });
    setDetailRune(detailV1);
    
    Skill().then((data) => {
      setSkill(data);
    });
  }, [])

  function ClickEvent() {
    if(detailRune.props.ver === "ver1") {
      v1Props.selected = "false";
      v2Props.selected = "true";
      setDetailRune(detailV2);
    } else {
      v1Props.selected = "true";
      v2Props.selected = "false";
      setDetailRune(detailV1);
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
      <style.ArticleBoxStyle $width="68%">
        <style.RuneArticleBoxStyle $height="30px">
          <style.SubTitleBox>추천 룬 세팅</style.SubTitleBox>
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="70%" $display="flex">
          <style.NavButtonStyle onClick={ClickEvent}>
            <style.RuneLeftNavBoxStyle>
              {navRuneV1}
              {navRuneV2}
            </style.RuneLeftNavBoxStyle>
          </style.NavButtonStyle> 
          {detailRune}
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="30px">
          <style.SubTitleBox>스킬 빌드</style.SubTitleBox>
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="calc( 30% - 81px )" $last="true">
          {skill}
        </style.RuneArticleBoxStyle>
      </style.ArticleBoxStyle>
    </>
  )
}

function ArticleRightBox() {

  return (
    <style.ArticleBoxStyle $width="30%">
      <ItemDivTitle fav="spell" />
      {/* <ItemDivTitle fav="start" />
      <ItemDivTitle fav="shoes" />
      <ItemDivTitle /> */}
    </style.ArticleBoxStyle>
  )
}

function ItemDivTitle(props) {
  const [item, setItem] = useState();
  useEffect(() => {
    ItemDivData().then((data) => {
      setItem(data);
    });
  }, [])

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
    <style.ItemDivStyle>
      <style.ItemTitleDivStyle>
        <style.ItemTitleStyle $seq="1" $size="50%" $backColor = "rgb(55, 55, 55)">{fav}</style.ItemTitleStyle>
        {item}
        <style.ItemTitleStyle $seq="2" $size="25%" $backColor = "rgb(96, 96, 240)">픽률</style.ItemTitleStyle>
        <style.ItemTitleStyle $seq="3" $size="25%" $backColor = "rgb(255, 26, 26)">승률</style.ItemTitleStyle>
      </style.ItemTitleDivStyle>
    </style.ItemDivStyle>
  ) : <style.ItemDivStyle />

  return data;
}

async function ItemDivData() {
  console.log(detailData);
}

// detailsMain.js에 뱉어내는 
export default function SecondArticle() {

  return (
    <>
      <style.OutBoxStyle $height="500px">
        <ArticleLeftBox />
        <ArticleRightBox />
      </style.OutBoxStyle>
    </>
  );
}
