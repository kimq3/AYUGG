import { useEffect, useState } from "react";
import * as styled from "./champsStyle";
import { useLocation } from 'react-router-dom';
import { ChampionApi } from "model/api/champions";

const champImgData = await ChampionApi();

export function Option() {
  const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];
  const [tierSelected, setTierSelected] = useState("Emerald");
  const tierChangeHandle = (e) => {
    setTierSelected(e.target.value);
  };

  return <>
    <styled.ChampionsSelect onChange={tierChangeHandle} value={tierSelected}>
      {tierList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </styled.ChampionsSelect>
  </>;
}

export  function Line(props) {
  const { pathname } = useLocation();

  return <styled.LineButton $pathname={pathname} $line={props.value}>
    <styled.ChampionLink to={"/" + props.value}>{props.name}</styled.ChampionLink>
  </styled.LineButton>
}

export function Input(){
  const [inputText, setInputText] = useState();
  const onChangeInput = e => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  return (
    <styled.ChampionsInputBox>
      <styled.ChampionsInput
        type="text"
        value={inputText}
        placeholder="챔피언 검색 (가렌, 갱플랭크 ...)"
        onChange={onChangeInput}
      />
      <styled.ResetButton onClick={onReset}>X</styled.ResetButton>
    </styled.ChampionsInputBox>
  );
}

export function ChampionsImg(){
  const [imgTag, setImgTag] = useState([]);

  useEffect(() => {
    ChampionsImgFull().then((data) => {
      setImgTag(data);
    });
  }, [])

  return (
    <>
      {imgTag}
    </>
  );
}

export async function ChampionsImgFull(){

  let fullData = [];
  for(let i = 0; i<champImgData[0].length; i++){
    let data = (
      <styled.ListBox key={i}>
        <li>
          <styled.ChampionLink to="/details">
            <styled.ChampionsImgStyle src={champImgData[0][i]} />
          </styled.ChampionLink>
          <styled.ChampionLink to="/details">
            <styled.ChampionsSpanStyle>{champImgData[1][i]}</styled.ChampionsSpanStyle>
          </styled.ChampionLink>
        </li>
      </styled.ListBox>
    )
    fullData.push(data);
  }
  
  return (
    <styled.ChampionsOlStyle>
      {fullData}
    </styled.ChampionsOlStyle>
  )
 }