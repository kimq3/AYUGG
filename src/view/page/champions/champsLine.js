import * as styled from "./champsStyle";
import { postRanking } from "model/api/champions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLine, changeTier, changeVersion } from "redux/store";

function OptionTierButton() {
  const tier = useSelector((state)=>{ return state.rankingTier })
  const [tierList, setTierList] = useState();
  const [props, setProps] = useState("close");
  let dispatch = useDispatch();

  useEffect(()=>{
    setTierList(OptionList(props))
  },[props])

  const openOption = () => {
    props === "open" ? setProps("close") : setProps("open");
    setTierList(OptionList(props))
  };

  function OptionList(props) {
    const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];      
    
    let list = tierList.map((key, index) => {
      const src = "/assets/images/tier/" + key.toLowerCase() + ".png"

      return (
        <styled.OptionButtonStyle key={index} onClick={() => dispatch(changeTier(key))}>
          <styled.TierImgBox>
            <styled.OptionListTierImg src={src} $sizes="24px"/>
          </styled.TierImgBox>
          {key}
        </styled.OptionButtonStyle>
      )
    })
  
    return (
      <styled.OptionListBox $state={props}>
        {list}
      </styled.OptionListBox>
    )
  }

  return <>
    <styled.SelectButtonStyle onClick={openOption}>
      {tier}
      <styled.ArrowDown></styled.ArrowDown>
      {tierList}
    </styled.SelectButtonStyle>
  </>;
}

function OptionVersionButton() {
  const ver = useSelector((state)=>{ return state.rankingVersion })
  const [verList, setVerList] = useState();
  const [props, setProps] = useState("close");
  let dispatch = useDispatch();

  useEffect(()=>{
    setVerList(OptionList(props))
  },[props])

  const openOption = () => {
    props === "open" ? setProps("close") : setProps("open");
    setVerList(OptionList(props))
  };

  function OptionList(props) {
    const verList = ["13.24", "13.23", "13.22"];      
    
    let list = verList.map((key, index) => <styled.OptionButtonStyle key={index} onClick={() => dispatch(changeVersion(key))}> {key} </styled.OptionButtonStyle>)
  
    return (
      <styled.OptionListBox $state={props}>
        {list}
      </styled.OptionListBox>
    )
  }

  return <>
    <styled.SelectButtonStyle onClick={openOption}>
      {ver}
      <styled.ArrowDown></styled.ArrowDown>
      {verList}
    </styled.SelectButtonStyle>
  </>;
}

function LineButton() {
  const line = useSelector((state)=>{ return state.rankingLine })
  let dispatch = useDispatch();
  const lineList = [{ "name" : "탑", "line" : "top" },
  { "name" : "정글", "line" : "jug" },
  { "name" : "미드", "line" : "mid" },
  { "name" : "바텀", "line" : "adc" },
  { "name" : "서폿", "line" : "sup" }];

  let list = lineList.map((data, index) => <styled.LineButtonStyle key={index} $line={data.line} $path={line} onClick={() => dispatch(changeLine(data.line))}>{data.name}</styled.LineButtonStyle>)

  return (
  <styled.LineButtonBox>
    {list}
  </styled.LineButtonBox>)
}

function NavTitle() {
  return (
    <>
      <styled.RankingTitleBox>
        <styled.RankingTitle $seq="start" $width="10%">
          순위
        </styled.RankingTitle>
        <styled.RankingTitle $width="30%">
          챔피언
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          티어
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          승률
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          픽률
        </styled.RankingTitle>
        <styled.RankingTitle $width="10%">
          밴율
        </styled.RankingTitle>
        <styled.RankingTitle $seq="end" $width="20%">
          카운터
        </styled.RankingTitle>
      </styled.RankingTitleBox>
    </>
  )
}

export function Ranking() {
  const [rank, setRank] = useState([]);

  let line = useSelector((state)=>{ return state.rankingLine })
  let tier = useSelector((state)=>{ return state.rankingTier })
  let ver = useSelector((state)=>{ return state.rankingVersion })
  
  useEffect(()=>{
      postRanking(tier,line, ver)
      .then((data)=>{
          setRank(data);
      });
  },[tier, line, ver]);

  let list = rank.map((data, index) => {
    function getId(data) {
      let a = data.split("https://opgg-static.akamaized.net/meta/images/lol/champion/");
      let b = a[1].split(".");
      let id = b[0].toLowerCase();
      return id;
    }

    let champId = getId(data.championImg);

    for(let i = 0; i < 3; i++) {

    }
    return (
      <styled.RankingDataWrapBox key={index}>
        <styled.RankingDataBox $width="10%">{data.rank}</styled.RankingDataBox>
        <styled.RankingDataBox $width="30%">
          <styled.RankingChampionLink $size="20%" to={`/champions/${champId}`}>
            <styled.ChampionsImgStyle $size="24px" src={data.championImg} />
          </styled.RankingChampionLink>
          <styled.RankingChampionLink $size="80%" to={`/champions/${champId}`}>
              <styled.RankingChampionNameBox> {data.champion}</styled.RankingChampionNameBox>
          </styled.RankingChampionLink>
        </styled.RankingDataBox>
        <styled.RankingDataBox $width="10%">{data.champtier === "0" ? "OP" : data.champtier}</styled.RankingDataBox>
        <styled.RankingDataBox $width="10%">{data.win}</styled.RankingDataBox>
        <styled.RankingDataBox $width="10%">{data.pick}</styled.RankingDataBox>
        <styled.RankingDataBox $width="10%">{data.banned}</styled.RankingDataBox>
        <styled.RankingDataBox $width="20%">
          {data.counterA !== "imgNull" ? 
          (<styled.RankingChampionLink $size="auto" to={`/champions/${getId(data.counterA)}`}>
            <styled.CounterImgStyle src={data.counterA} />
          </styled.RankingChampionLink>) : <></>}
          {data.counterB !== 'imgNull' ? 
          (<styled.RankingChampionLink $size="auto" to={`/champions/${getId(data.counterB)}`}>
            <styled.CounterImgStyle src={data.counterB} />
          </styled.RankingChampionLink>) : <></>}
          {data.counterC !== 'imgNull' ? 
          (<styled.RankingChampionLink $size="auto" to={`/champions/${getId(data.counterC)}`}>
            <styled.CounterImgStyle src={data.counterC} />
          </styled.RankingChampionLink>) : <></>}
        </styled.RankingDataBox>
      </styled.RankingDataWrapBox>
    )
  })

  return (
    <>
      <NavTitle />
      {list}
    </>
  )
}

export function MiddleLineButton() {
  return (
    <>
      <styled.ChampionsBox $height="50px">
        <styled.WrappingBox>
          <OptionTierButton />
          <OptionVersionButton />
        </styled.WrappingBox>
        <styled.WrappingBox>
          <LineButton />
        </styled.WrappingBox>
      </styled.ChampionsBox>
    </>
  );
}