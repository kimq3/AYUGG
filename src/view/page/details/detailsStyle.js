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
  margin: 15px 0;
  position: relative;
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
  font-size: 20px;
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
  width: auto;
  height: 100%;
  margin-right: 10px;
`;

export const RateStyle = styled.div`
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  font-weight: ${(props) => props.$weight};
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
  width: 36px;
  height: 36px;
  display: block;
  margin: 7px auto;
`;

export const CounterInfoStyle = styled.div`
  margin: ${(props) => props.$margin};
  font-size: 12px;
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
  width: 25%;
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

export const RuneRightDetailBoxStyle = styled(Center)`
  width: 100%;
  height: 100%;
  margin: 0;
  position: static;
`;

export const RuneDetailBoxStyle = styled.div`
  width: 32%;
  height: 100%;
  padding-top: 5%;
  box-sizing: border-box;
`;

export const RuneDetailMainTitleStyle = styled(Center)`
  width: 100%;
`;

export const RuneDetailSubTitleStyle = styled(Center)`
  width: 100%;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 10px 3px;
`;

export const RuneStatsStyle = styled(Center)`
  width: 100%;
  justify-content: space-evenly;
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

export const RuneTypeStyle = styled(FlexBox)`
  width: 100%;
  background-color: #fff;
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
  margin: 0 auto;
  color: black;
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
  width: 24px;
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
  background-color: ${(props) => props.$max === "max" ? "rgb(70, 185, 170)" : "#fff"};
  color: ${(props) => props.$max === "max" ? "#fff" : "black"};
  border-color: rgb(70, 185, 170);
`;

export const OrderSkillStyle = styled(BasicOrderBox)`
  height: auto;
  background-color: ${(props) => props.$max === "max"
   ? "rgb(70, 185, 170)" : (props.$master === "true" ? "rgb(138, 217, 232)" : "rgb(202, 215, 226)")};
  color: ${(props) => props.$max === "max" ? "#fff" : "black"};
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

export const ItemOutBoxStyle = styled.div`
  width: 100%;
  height: 88%;
  border-radius: 4px;
  background-color: rgb(200, 200, 200);
`;

export const ItemNavBoxStyle = styled(Border4pxDiv)`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
`;

export const ItemNavStyle = styled(Border4pxDiv)`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  box-sizing: border-box;
  border-radius: 2px;
  border-top: 1px solid rgb(255, 255, 115);
  background-color: ${(props) => props.$selected === "true" ? "rgb(200, 200, 200)" : "rgb(55, 55, 55);"};
  border-top: ${(props) => props.$selected === "true" ? "2px solid rgb(255, 255, 115)" : "0px"};
  opacity: ${(props) => props.$selected === "true" ? "1" : "0.5"};
  filter: ${(props) => props.$selected === "true" ? "grayscale(0)" : "grayscale(1)"};
  flex-direction: row;
`;

const BasicItemImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin: 0 auto;
`;

export const ItemNavButtonStyle = styled.button`
  width: 100%;
  height: 100%;
  border: transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 0px;
`;

export const ItemNavImgBoxStyle = styled(Border4pxDiv)`
  width: 10%;
  height: 100%;
`;

export const ItemNavImgStyle = styled(BasicItemImg)`
  border: 2px solid rgb(255, 255, 115);
`;

export const ItemNavNameBoxStyle = styled(Border4pxDiv)`
  width: 90%;
  padding-left: 10px;
  box-sizing: border-box;
`;

export const ItemNavNameStyle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: auto 0px;
`;

export const MiddleWrappingBox = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
`;

export const MiddleTitleDivStyle = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgb(90, 90, 90);
  display: flex;
  border-right: ${(props) => props.$seq === "1" ? "1px solid rgb(200, 200, 200)" : "0px"};
`;

export const MiddleTitleStyle = styled.div`
  width: ${(props) => props.$size};
  height: 100%;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailItemBoxStyle = styled.div`
  width: 100%;
  height: 65%;
  background-color: white;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: ${(props) => (props.$display === "true" ? "flex" : "none")};
`;

const BasicItemDivBox = styled.div`
  width: 50%;
  height: 100%;
`;

const BasicItem = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemArticleBoxStyle = styled(BasicItemDivBox)`
  border-right: ${(props) => props.$position === "left" ? "1px solid rgb(200, 200, 200)" : "0px"};
`;

export const ItemBoxStyle = styled(BasicItem)`
  width: 100%;
  border-bottom: ${(props) => props.$seq === 1 ? "1px solid rgb(200, 200, 200)" : "0px"};
`;

export const ItemWrappingBoxStyle = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
  padding-top: 5%;
  box-sizing: border-box;
  display: ${(props) => props.$state === "legend" ? "flex" : "block"};
`;

export const ItemImgStyle = styled(BasicItemImg)`
  border: ${(props) => props.$state === "m"  ? "2px solid rgb(255, 255, 115)" : "0px"};
  border-radius: 50%;
  margin-right: 10px;
`;

export const ItemRateBoxStyle = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemNameStyle = styled.div`
  width: 70%;
  height: 100%;
  text-align: left;
  font-size: 16px;
  padding-top: 5px;
  padding-left: 10px;
  box-sizing: border-box;
`;