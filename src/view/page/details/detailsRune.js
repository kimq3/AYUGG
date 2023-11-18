import { ChampionDetailApi as Api, RuneApi } from "model/constantly/apiConstants";
import * as style from "./detailsStyle";
import { useEffect, useState } from "react";

function GetRuneData() {
  const detailData = Api();
  let rawData = detailData.rune;
  const runeData = RuneApi();
  const basicUrl = "https://ddragon.leagueoflegends.com/cdn/img/";

  let runeVer1, runeVer2, runeList = [];
  if (rawData !== undefined) {
    const runeVersion1 = rawData.version1;
    const rune2 = rawData.version2;
    let data = ExtractData(runeVersion1);

    console.log(data);
  }

  function ExtractData (rune) {
    let mainRuneList = [];
    let lowMainRuneList = [];
    let mainRune = [];
    let subRuneList = [];
    let lowSubRuneList = [];
    let subRune = [];
    let allRuneData = [];
    let rune1 = rawData.version1;
  
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

  return 
}


function NavRune() {
  let data = GetRuneData();
  return (
    <>
      <style.NavRuneStyle $selected="true" $position="first">
        <style.NavRuneImgStyle />
      </style.NavRuneStyle>
      <style.NavRuneStyle
        $selected="false"
        $position="second"
      ></style.NavRuneStyle>
    </>
  );
}

export default function DetailsRuneInfo() {
  return (
    <>
      <style.OutBoxStyle $height="500px">
        {/* 왼쪽 룬 박스 */}
        <style.RuneWrappingBox $width="68%">
          <style.RuneArticleBox $height="30px">
            <style.SubTitleBox>추천 룬 세팅</style.SubTitleBox>
          </style.RuneArticleBox>
          <style.RuneArticleBox $height="60%">
            <NavRune />
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
