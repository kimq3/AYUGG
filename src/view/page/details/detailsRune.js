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
  
  let runeData = props === "ver1" ? getRune[0] : getRune[1];
  let rateData = runeData[2];
  let selected = props === "ver1" ? "true" : "false";
  let mainRuneUrl = basicRuneImgUrl + runeData[0][0];
  let subRuneUrl = basicRuneImgUrl + runeData[1][0];

  return (
      <style.NavRuneStyle $selected={selected}>
        <style.NavRuneWrappingDivStyle>
          <style.Center>
            <RuneImgTag bSize="40px" bMain="true" iSize="32px" iSrc={mainRuneUrl}></RuneImgTag>
            <RuneImgTag bSize="32px" iSize="24px" iSrc={subRuneUrl}></RuneImgTag>
          </style.Center>
            <RuneRateDiv rate={rateData.winRate} value={rateData.winValue} /> 
            <RuneRateDiv rate={rateData.pickRate} value={rateData.pickValue} />
        </style.NavRuneWrappingDivStyle>
      </style.NavRuneStyle>
  );
}

// 룬 이미지 공통태그
function RuneImgTag(props) {
  let boxSize = props.bSize;
  let boxMain = props.bMain;
  let imgSize = props.iSize;
  let imgSrc = props.iSrc;

  return (
    <style.NavRuneImgBoxStyle $size={boxSize} $main={boxMain}>
      <style.NavRuneImgStyle $size={imgSize} src={imgSrc} />
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
async function DetailRune() {


  return(
    <>
    {/* 룬 종류 - 정밀, 마법, 지배 ... */}
      <style.RuneDetailMainTitleStyle>

      </style.RuneDetailMainTitleStyle>
      {/* 해당 룬의 특성? - 집공, 치속, 기발 ... */}
      <div></div>
      {/* 특성의 특성 - 침착, 강인함, 최후의 일격 ... */}
      <div></div>
    </>
  );
}

// 비동기 api를 담아낸 코드를 useState로 받아와서 react-child로 받아내는 함수
function ArticleLeftBox() {
  const [navRuneV1, setNavRuneV1] = useState([]);
  const [navRuneV2, setNavRuneV2] = useState([]);
  useEffect(() => {
    NavRune("ver1").then((data) => {
      setNavRuneV1(data);
    });
    NavRune("ver2").then((data) => {
      setNavRuneV2(data);
    });
  }, [])

  return (
    <>
      <style.ArticleLeftBoxStyle $width="68%">
        <style.RuneArticleBoxStyle $height="30px">
          <style.SubTitleBox>추천 룬 세팅</style.SubTitleBox>
        </style.RuneArticleBoxStyle>
        <style.RuneArticleBoxStyle $height="60%">
          <style.RuneLeftNavBoxStyle>
            {navRuneV1}
            {navRuneV2}
          </style.RuneLeftNavBoxStyle>
          <style.RuneRightDetailBoxStyle>
            {/* 주룬 부룬 특성 */}
          </style.RuneRightDetailBoxStyle>
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
