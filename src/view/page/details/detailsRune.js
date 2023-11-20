import { ChampionDetailApi as ChampApi, RuneApi } from "model/constantly/apiConstants";
import * as style from "./detailsStyle";
import { useEffect, useState } from "react";

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
              lowRune.push(data);
            })
            lowMainRuneList.push(lowRune);
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
              lowRune.push(data);
            })
            lowSubRuneList.push(lowRune);
          })
          subRuneList.push(subRune);
          subRuneList.push(lowSubRuneList);
        }
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

async function NavRune(props) {
  const basicUrl = "https://ddragon.leagueoflegends.com/cdn/img/";
  const detailData = await ChampApi();
  const runeApiData = await RuneApi();
  
  let getRune = GetRuneData(detailData, runeApiData);
  let runeData = props === "ver1" ? getRune[0] : getRune[1];
  let rateData = runeData[2];
  let selected = props === "ver1" ? "true" : "false";
  let mainRuneUrl = basicUrl + runeData[0][0];
  let subRuneUrl = basicUrl + runeData[1][0];

  return (
      <style.NavRuneStyle $selected={selected}>
        <style.NavRuneWrappingDivStyle>
          <style.Center>
            <style.NavRuneImgBoxStyle $size="40px" $main="true">
              <style.NavRuneImgStyle $size="32px" src={mainRuneUrl} />
            </style.NavRuneImgBoxStyle>
            <style.NavRuneImgBoxStyle $size="32px">
              <style.NavRuneImgStyle $size="24px" src={subRuneUrl} />
            </style.NavRuneImgBoxStyle>
          </style.Center>
            <RuneRateDiv rate={rateData.winRate} value={rateData.winValue} /> 
            <RuneRateDiv rate={rateData.pickRate} value={rateData.pickValue} />
        </style.NavRuneWrappingDivStyle>
      </style.NavRuneStyle>
  );
}

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

async function DetailRune() {
  const detailData = await ChampApi();
  const runeApiData = await RuneApi();



  return;
}

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

export default function DetailsRuneInfo() {

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
