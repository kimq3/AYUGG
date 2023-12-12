import Nav from "view/nav";
import * as styled from "./champsStyle";
import * as champImg from "./chamsImage";
import { MiddleLineButton, Ranking } from "./champsLine";

function ChampionsMain() {

  return (
    <div>
      <Nav />
      <MiddleLineButton/>
      <styled.ChampionsBox $height="auto">
        <styled.ArticleBox $seq="1" $width="40%">
          <champImg.Input />
        </styled.ArticleBox>
        <styled.ArticleBox $seq="2" $width="58%">
          <Ranking />
        </styled.ArticleBox>
      </styled.ChampionsBox>
    </div>
  );
}

export default ChampionsMain;
