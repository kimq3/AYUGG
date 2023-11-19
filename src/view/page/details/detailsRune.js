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

    dataA && dataA.map((index) => {
      runeVer1.push(index);
    })
    dataB && dataB.map((index) => {
      runeVer2.push(index);
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
      // let rune1 = rawData.version1;
    
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
  console.log(runeData);
  let mainRuneUrl = basicUrl + runeData[0][0];
  let subRuneUrl = basicUrl + runeData[1][0];

  return (
    <>
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
    </>
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

export default function DetailsRuneInfo() {
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
      <style.OutBoxStyle $height="500px">
        {/* 왼쪽 룬 박스 */}
        <style.RuneWrappingBox $width="68%">
          <style.RuneArticleBox $height="30px">
            <style.SubTitleBox>추천 룬 세팅</style.SubTitleBox>
          </style.RuneArticleBox>
          <style.RuneArticleBox $height="60%">
            {navRuneV1}
            {navRuneV2}
          </style.RuneArticleBox>
          <style.RuneArticleBox $height="30px">
            <style.SubTitleBox>스킬 빌드</style.SubTitleBox>
          </style.RuneArticleBox>
          <style.RuneArticleBox
            $height="calc( 40% - 81px )"
            $last="true"
          ></style.RuneArticleBox>
        </style.RuneWrappingBox>
        {/* 오른쪽 스펠, 시작 아이템, 신발 - 선호도 */}
        <style.RuneWrappingBox $width="30%">
          <div></div>
        </style.RuneWrappingBox>
      </style.OutBoxStyle>
    </>
  );
}
