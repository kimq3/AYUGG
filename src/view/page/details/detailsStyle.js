import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  border-radius: 4px;
`;

const Border4pxImg = styled.img`
  border-radius: 4px;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  position: relative;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  opacity: 0.5;
`;

// 틀
export const OutBoxStyle = styled(FlexBox)`
  width: 900px;
  height: ${(props) => props.$height};
  margin: 30px auto;
  padding: 5px;
  background-color: rgb(90, 90, 90);
  flex-wrap: wrap;
  align-content: space-evenly;
  justify-content: space-around;
`;

// 첫 번째 박스
// - Basic 박스
export const BasicInfoStyle = styled(FlexBox)`
  padding: 0px 10px;
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

export const BasicDivStyle = styled.div`
  width: ${(props) => props.$width};
  height: 100px;
  display: ${(props) => (props.$display ? props.$display : "flex")};
  box-sizing: border-box;
  align-items: center;
  margin: ${(props) => props.$margin};
`;

// - > 대표 Img
export const BasicImgStyle = styled(Border4pxImg)`
  width: 100%;
  height: 100%;
`;

// - > 이름, 스킬
export const NameSkillStyle = styled(FlexBox)`
  width: 100%;
  height: 50%;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
`;

export const SkillImgStyle = styled(Border4pxImg)`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  margin-right: 5px;
`;

// - > Rate
export const RateBoxStyle = styled.div`
  width: 80px;
  height: 100%;
  margin-right: 10px;

`;

export const RateStyle = styled.div`
  width: 65px;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  font-weight: ${(props) => props.$weight};
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: 0 auto;
`;

// - Counter 박스
export const CounterBoxStyle = styled(FlexBox)`
  width: 100%;
  height: 48%;
  box-sizing: border-box;
  margin: 0px 10px;
  justify-content: space-between;
  align-content: space-around;
`;

export const CounterStyle = styled.div`
  padding: 10px;
  width: 49.5%;
  height: 100%;
  color: #fff;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.$back};
  text-align: center;
  font-size: 16px;
`;

export const CounterOlStyle = styled.ol`
  width: 100%;
  height: 75%;
  padding-left: 0px;
  box-sizing: border-box;
  margin: 9px 0px;
`;

export const CounterLiStyle = styled.li`
  display: flex;
  justify-content: space-evenly;
`;

export const CounterDivStyle = styled.div`
  width: 70px;
  height: 90px;
  color: #fff;
  overflow: hidden;
  text-align: center;
`;

export const CounterImgStyle = styled(Border4pxImg)`
  width: 40px;
  height: 40px;
  display: block;
  margin: 7px auto;
`;

export const CounterInfoStyle = styled.div`
  margin: ${(props) => props.$margin};
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
`;

// 두번째 박스
//  - 룬
const RuneBox = styled.div`
  background-color: rgb(200, 200, 200);
  border-radius: 4px;
`;

export const ArticleBoxStyle = styled.div`
  width: ${(props) => props.$width};
  height: 99%; 
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const RuneArticleBoxStyle = styled(RuneBox)`
  width: 100%;
  height: ${(props) => props.$height};
  margin-bottom: ${(props) => (props.$last ? "0px" : "7px")};
  display: ${(props) => (props.$display ? props.$display : "block")};
`;

// - > Nav 룬
export const SubTitleBox = styled(FlexBox)`
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  padding-top: 5px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
`;

export const NavButtonStyle = styled.button`
  width: 23%;
  height: 100%;
  cursor: pointer;
  padding: 0px;
  border: none;
  background-color: transparent;
`;

export const RuneLeftNavBoxStyle = styled.div`
  width: 100%;
  height: 100%;
`;

export const NavRuneStyle = styled(RuneBox)`
  border-left: ${(props) => (props.$selected === "true" ? "2px solid red" : "none")};
  border-radius: 0px;
  width: 100%;
  height: 50%;
  background-color: ${(props) => (props.$selected === "true" ? "none" : "rgb(90, 90, 90)")};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavRuneWrappingDivStyle = styled.div`
  width: 100%;
  height: auto;
`;

// 이미지를 담은 박스
const RuneImgBoxStyle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: black;
  text-align: center;
`;

// 룬 이미지 기본 스타일
const RuneImgStyle = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 4px;
  border-radius: 50%;
`;

export const NavRuneImgBoxStyle = styled(RuneImgBoxStyle)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  position: ${(props) => props.$main ? "static;" : "absolute;"}
  right: ${(props) => props.$main ? "0px" : "20px;"};
  top: ${(props) => props.$main ? "0px" : "20px;"}; 
  opacity: ${(props) => props.$selected === "true" ? "1" : "0.5"};
  filter: ${(props) => props.$selected === "true" ? "grayscale(0)" : "grayscale(1)"};
  background-color: ${(props) => props.$isNull === "true" ? "transparent" : "black"};
  border-color: ${(props) => props.$isNull === "true" ? "transparent" : "#fff"};
`;

export const NavRuneImgStyle = styled(RuneImgStyle)`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  opacity: ${(props) => props.$selected === "true" ? "1" : "0.5"};
  filter: ${(props) => props.$selected === "true" ? "grayscale(0)" : "grayscale(1)"};
  margin: 0;
`;

const RuneRateDiv = styled.div`
  width: 50%;
  height: 32px;
  font-size: 16px;
  text-align: center;
`;

export const RuneRateBoxStyle = styled.div`
  display: flex;
  justify-content: center;
`;

export const RuneRateDivStyle = styled(RuneRateDiv)`
  width: ${(props) => props.$size};
  margin: 3px auto;
  color: black;  
  display:flex;
  justify-content: center;
  align-items: center;
`;

// NavRune 박스 옆 detail 박스
export const DetailRuneWrappingBoxStyle = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

// detail 박스에 있는 3등분 div박스
export const DetailRuneBoxStyle = styled.div`
  width: 32%;
  height: 100%;
`;

const divCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RuneTitleBoxStyle = styled(divCenter)`
  width: 100%;
  height: 20%;
`;

export const RuneIdBoxStyle = styled(divCenter)`
  width: 100%;
  height: 20%;
  justify-content: space-evenly;
`;

export const RuneLineBoxStyle = styled.div`
  width: 100%;
  height: 60%;
  box-sizing: border-box;
`;

export const LineBox = styled(divCenter)`
  width: 100%;
  height: 30%;
  justify-content: space-evenly;
`;

// 스킬 담은 박스
export const SkillWrappingBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const SkillMasterBoxStyle = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const SkillBoxStyle = styled.div`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  position: relative;
`;

export const SkillKeyStyle = styled.span`
  width: 16px;
  height: 16px;
  font-size: 12px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const OrderBoxStyle = styled.div`
  width: 30px;
  height: 90%;
`;

const BasicOrderBox = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 5%;
  text-align: center;
  padding: 3px 0px;
`;

export const OrderSeqStyle = styled(BasicOrderBox)`
  height: auto;
  background-color: ${(props) => props.$max === "true" ? "rgb(70, 185, 170)" : "#fff"};
  color: ${(props) => props.$max === "true" ? "#fff" : "black"};
  border-color: rgb(70, 185, 170);
`;

export const OrderSkillStyle = styled(BasicOrderBox)`
  height: auto;
  background-color: ${(props) => props.$max === "true"
   ? "rgb(70, 185, 170)" : (props.$master === "true" ? "rgb(138, 217, 232)" : "rgb(202, 215, 226)")};
  color: ${(props) => props.$max === "true" ? "#fff" : "black"};
  border-color: transparent;
`;

// 선호하는 아이템
export const FavDivStyle = styled.div`
  width: 100%;
  height: 24%;
  border-radius: 4px;
  background-color: rgb(200, 200, 200);
`; 

const BasicFavDiv = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
`;

export const FavTitleDivStyle = styled(BasicFavDiv)`
  height: 30%;
  font-size: 12px;
`;

export const FavTitleStyle = styled.div`
  width: ${(props) => props.$size};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.$backColor};
  border-top-left-radius: ${(props) => props.$seq === "1" ? "4px" : "0px"};
  border-top-right-radius: ${(props) => props.$seq === "3" ? "4px" : "0px"};
  color: #fff;
  text-align: ${(props) => props.$seq === "1" ? "left" : "center"};
  padding-left: ${(props) => props.$seq === "1" ? "15px" : "0px"};
  box-sizing: ${(props) => props.$seq === "1" ? "border-box" : "content-box"};
`;

export const FavDataDivStyle = styled(BasicFavDiv)`
  height: 70%;
  background-color: white;
  display: block;
  background-color: rgb(200, 200, 200);
`;

export const FavVerBoxStyle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  aling-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const FavVerDataStyle = styled.div`
  width: ${(props) => props.$size};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: black;
`;

export const FavImgBoxStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const FavImgStyle = styled(Border4pxImg)`
  width: 28px;
  height: 28px;
  display: inline-block;
  border-radius: ${(props) => props.$isNull === 'true' ? "0px" : "4px"};
`;

export const ImgNameStyle = styled.div`
  width: auto;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
`;

// 아이템
const Border4pxDiv = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ItemTitleBoxStyle = styled(Border4pxDiv)`
  width: 100%;
  height: 10%;
  background-color: rgb(200, 200, 200);
  margin-bottom: 5px;
`;

export const ItemTitleStyle = styled(Border4pxDiv)`
  padding-left: 40px;
  padding-top: 5px;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
`;

export const ItemArticleBoxStyle = styled(Border4pxDiv)`
  width: 100%;
  height: calc(88% - 16px);
  background-color: rgb(200, 200, 200);
`;

export const MiddleTitleBoxStyle = styled.div`
  width: 100%;
  height: 16px;
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottoem: 1px solid grey;
  font-size: 12px;
  display: flex;
  background-color: transparent;
`;

export const MiddleTitleWrappingBox = styled.div`
  width: ${(props) => props.$size};;
  height: 100%;
  border-top-right-radius: ${(props) => props.$right ? "4px" : "0px"};
  border-top-left-radius: ${(props) => props.$left ? "4px" : "0px"};
  display: flex;
`;

export const MiddleTitleStyle = styled.div`
  width: ${(props) => props.$size};
  height: 100%;
  border-right: ${(props) => props.$last ? "0px" :  "1px solid grey"};
  color: white;
`;

export const ItemWrappingBoxStyle = styled.div`
  width: 100%;
  height: 25%;
  background-color: transparent;
  display: flex;
`;

export const ItemTreeBoxStyle = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
`;

export const LegendItemBoxStyle = styled.div`
  width: 40%;
  height: 100%;
  display:flex;
`;

export const ItemTreeImgBoxStyle = styled(divCenter)`
  width: 60%;
  height: 100%;
`;

export const ItemImgStyle = styled.img`
  width: 32px;
  height: 32px;
  border: ${(props) => props.$mythic === "true" ? "1px solid yellow" :  "1px solid black"};
  border-radius: ${(props) => props.$mythic === "true" ? "50%" :  "4px"};
  margin-right: 10px;
`;

export const ItemTreeRateBoxStyle = styled(divCenter)`
  width: 20%;
  height: 100%;
  font-size: 16px;
`;

export const LegendImgBoxStyle = styled(divCenter)`
  width: 60%;
  height: 100%;
`;

export const LegendRateBoxStyle = styled(divCenter)`
  width: 40%;
  height: 100%;
  font-size: 16px;
`;

export const NotFoundDivStyle = styled.div`

`;