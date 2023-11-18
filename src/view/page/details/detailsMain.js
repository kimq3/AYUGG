import Nav from "view/nav";
import DetailsBasicInfo from "./detailsBasicInfo";
import DetailsRuneInfo from "./detailsRune";
import { ChampionApi } from "model/constantly/apiConstants";

function ChampionsDetails() {
  ChampionApi();
  return (
    <>
      <Nav />
      <DetailsBasicInfo />
      <DetailsRuneInfo />
    </>
  );
}

export default ChampionsDetails;
