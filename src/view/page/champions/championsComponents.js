import { useEffect, useState } from "react";
import { ChampionsSelect, LineButton, ChampionsInput, ResetButton, ChampionsImgStyle, ChampionsOlStyle, ListBox, ChampionsSpanStyle, ChampionsInputBox } from "./championsStyle";
import { Link, useLocation } from 'react-router-dom';
import { ChampionApi } from "model/constantly/apiConstants";

export function Option() {
  const tierList = ["Challenger", "Grandmaster", "Master", "Diamond", "Emerald", "Platinum", "Gold", "Silver", "Bronze", "Iron"];
  const [tierSelected, setTierSelected] = useState("Emerald");
  const tierChangeHandle = (e) => {
    setTierSelected(e.target.value);
  };

  return <>
    <ChampionsSelect onChange={tierChangeHandle} value={tierSelected}>
      {tierList.map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </ChampionsSelect>
  </>;
}

export  function Line(props) {
  const { pathname } = useLocation();
  const lineClick = () => {
    <Link to={"/" + props.value}></Link>
  }

  return <LineButton pathname={pathname} line={props.value} onClick={lineClick}>
    {props.name}
  </LineButton>
}

export function Input(){
  const [inputText, setInputText] = useState("수정 필요 / placeholer");
  const onChangeInput = e => {
    setInputText(e.target.value);
  };
  const onReset = () => {
    setInputText("");
  };

  return (
    <ChampionsInputBox>
      <ChampionsInput
        type="text"
        value={inputText}
        placeholder="챔피언 검색 (가렌, 갱플랭크 ...)"
        onChange={onChangeInput}
      />
      <ResetButton onClick={onReset}>X</ResetButton>
    </ChampionsInputBox>
  );
}

export function ChampionsImg(){
  
  return (
    <>
      <ChampionsImgFull></ChampionsImgFull>
    </>
  );
}

export function ChampionsImgFull(){
  let champImgData = ChampionApi();
  let [dataList, setDataList] = useState([]);
  console.log(champImgData);
  useEffect(()=>{
    let fullData = [];
    if(champImgData.length === 2) {
      for(let i = 0; i<champImgData[0].length; i++){
        let data = (
          <ListBox>
            <li>
              <ChampionsImgStyle src={champImgData[0][i]} />
              <ChampionsSpanStyle>{champImgData[1][i]}</ChampionsSpanStyle>
            </li>
          </ListBox>
        )
        fullData.push(data);
      }

      setDataList(fullData);
    }
  }, [champImgData]);

  return (
    <ChampionsOlStyle>
      {dataList}
    </ChampionsOlStyle>
  )
 }