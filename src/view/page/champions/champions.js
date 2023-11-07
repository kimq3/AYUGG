import { ChampionsBox, WrappingBox, ArticleBox, } from "./championsStyle";
import { Option, Line, Input, ChampionsImg } from "./championsComponents";

function Champions(){
  return (
      <>
        <ChampionsBox height="50px">
          <WrappingBox>
            <Option />
            <Option />
          </WrappingBox>
          <WrappingBox>
            <Line value="top" name="탑" />
            <Line value="jungle" name="정글" />
            <Line value="mid" name="미드" />
            <Line value="adc" name="원딜" />
            <Line value="support" name="서포터" />
          </WrappingBox>
          
        </ChampionsBox>

        <ChampionsBox height="auto">
          <ArticleBox width="">
            <Input />
            <ChampionsImg></ChampionsImg>
          </ArticleBox>
          <ArticleBox>dd</ArticleBox>
        </ChampionsBox>
      </>
  );
}

export default Champions;