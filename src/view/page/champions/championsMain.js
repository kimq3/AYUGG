import Nav from "view/nav";
import * as cs from "./championsStyle";
import * as cc from "./championsComponents";

function ChampionsMain() {
  return (
    <div>
      <Nav></Nav>
      <cs.ChampionsBox $height="50px">
        <cs.WrappingBox>
          <cc.Option />
          <cc.Option />
        </cs.WrappingBox>
        <cs.WrappingBox>
          <cc.Line value="top" name="탑" />
          <cc.Line value="jungle" name="정글" />
          <cc.Line value="mid" name="미드" />
          <cc.Line value="adc" name="원딜" />
          <cc.Line value="support" name="서포터" />
        </cs.WrappingBox>
      </cs.ChampionsBox>

      <cs.ChampionsBox $height="auto">
        <cs.ArticleBox $width="40%">
          <cc.Input />
          <cc.ChampionsImg></cc.ChampionsImg>
        </cs.ArticleBox>
        <cs.ArticleBox $width="auto">dd</cs.ArticleBox>
      </cs.ChampionsBox>
    </div>
  );
}

export default ChampionsMain;
