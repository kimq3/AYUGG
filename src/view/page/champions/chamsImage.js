import { useEffect, useState } from "react";
import * as styled from "./champsStyle";
import { ChampionApi } from "model/api/champions";
// import { useNavigate } from "react-router";

const champImgData = await ChampionApi();

export function Input() {
  const [data, setData] = useState();
  
  useEffect(() => {
    setData(champImgData);
  }, []);

  return (
    data && <InputData data={data} />
  )
}

function InputData(props){
  const imgData = props.data;
  const [userInputK, setUserInputK] = useState("");
  const [userInputE, setUserInputE] = useState();
  // let navigate = useNavigate();

  const onChangeInput = e => {
    setUserInputK(e.target.value.toLowerCase());
    setUserInputE(e.target.value === "" ? null : e.target.value.toLowerCase());
  };
  const onReset = () => {
    setUserInputK("");
  };
  const handleOnClick = () => {
    // navigate('/');
  };
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleOnClick();
    }
  };

  const searchedK = imgData.filter((item) =>
    item.name.toLowerCase().includes(userInputK)
  );

  const searchedE = imgData.filter((item) =>
    item.id.toLowerCase().includes(userInputE)
  );

  return (
    <>
      <styled.ChampionsInputBox>
        <styled.ChampionsInput
          type="text"
          value={userInputK}
          placeholder="챔피언 검색 (가렌, 갱플랭크 ...)"
          onChange={onChangeInput}
          onKeyDown={handleOnKeyPress}
        />
        <styled.ResetButton onClick={onReset}>X</styled.ResetButton>
      </styled.ChampionsInputBox>
      <styled.ChampionsOlStyle>
        {searchedK.map((item) => (
          <ChampionsImgFull key={item.id} {...item} />
        ))}
        {searchedE.map((item) => (
          <ChampionsImgFull key={item.id} {...item} />
        ))}
      </styled.ChampionsOlStyle>
    </>
  );
}

export function ChampionsImgFull({ id, name, src }){
  let listData = (
    <styled.ListBox key={id}>
      <li>
        <styled.ChampionLink to={`/champions/${id}`}>
          <styled.ChampionsImgStyle $size="48px" src={src} />
        </styled.ChampionLink>
        <styled.ChampionLink to={`/champions/${id}`}>
          <styled.ChampionsSpanStyle>{name}</styled.ChampionsSpanStyle>
        </styled.ChampionLink>
      </li>
    </styled.ListBox>
  )
  
  return  <>{listData}</>
 }