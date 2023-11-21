import { ChampionDetailApi as ChampApi, RuneApi } from "model/constantly/apiConstants";
import * as style from "./detailsStyle";
import { useEffect, useState } from "react";

const detailData = await ChampApi();
const runeApiData = await RuneApi();
const getRune = GetRuneData(detailData, runeApiData);
const basicRuneImgUrl = "https://ddragon.leagueoflegends.com/cdn/img/";



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
  let selected = ver === "ver1" ? "true" : "false";
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
      <style.RuneRightDetailBoxStyle $switch={props.switch}>    
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

// 비동기 api를 담아낸 코드를 useState로 받아와서 react-child로 받아내는 함수
function ArticleLeftBox() {
  const [navRuneV1, setNavRuneV1] = useState([]);
  const [navRuneV2, setNavRuneV2] = useState([]);
  const [switchV1, setSwitchV1] = useState("on");
  const [switchV2, setSwitchV2] = useState("off");

  useEffect(() => {
    const navRuneV1Props = {
      ver: "ver1"
    }
    const navRuneV2Props = {
      ver: "ver2"
    }
    NavRune(navRuneV1Props).then((data) => {
      setNavRuneV1(data);
    });
    NavRune(navRuneV2Props).then((data) => {
      setNavRuneV2(data);
    });
  }, [])

  function ClickEvent() {
    switchV1 === "on" ? setSwitchV1("off") : setSwitchV1("on");
    switchV2 === "on" ? setSwitchV2("off") : setSwitchV2("on");
    return;
  }

  return (
    <>
      <style.ArticleLeftBoxStyle $width="68%">
        <style.RuneArticleBoxStyle $height="30px">
          <style.SubTitleBox>추천 룬 세팅</style.SubTitleBox>
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="60%" $display="flex">
          <style.NavButtonStyle onClick={ClickEvent}>
            <style.RuneLeftNavBoxStyle>
              {navRuneV1}
              {navRuneV2}
            </style.RuneLeftNavBoxStyle>
          </style.NavButtonStyle> 
          <DetailRune ver="ver1" switch={switchV1} />
          <DetailRune ver="ver2" switch={switchV2} />
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="30px">
          <style.SubTitleBox>스킬 빌드</style.SubTitleBox>
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="calc( 40% - 81px )" $last="true"></style.RuneArticleBoxStyle>
      </style.ArticleLeftBoxStyle>
    </>
  )
}

// detailsMain.js에 뱉어내는 
export default function SecondArticle() {

  return (
    <>
      <style.OutBoxStyle $height="500px">
          <ArticleLeftBox />
        {/* 오른쪽 스펠, 시작 아이템, 신발 - 선호도 */}
        <style.ArticleLeftBoxStyle $width="30%">
          <div></div>
        </style.ArticleLeftBoxStyle>
      </style.OutBoxStyle>
    </>
  );
}
