import {
    createBrowserRouter,
} from "react-router-dom";
import App from "App";
import RankingMain from "view/page/ranking/rankingMain";
import Multi from "view/page/multi/multiPage";
import EventMain from "view/page/event/eventMain";
import ChampionsMain from "view/page/champions/championsMain";
import ChallengerMain from "view/page/challenger/challengerMain";
import StatisticsMain from "view/page/statistics/statisticsMain";
import SearchPage from "view/page/search/searchPage";
import ChampionsDetails from "view/page/champions/detail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/champion",
      element: <ChampionsMain></ChampionsMain>
    },
    {
      path:"/statistics",
      element:<StatisticsMain></StatisticsMain>
    },
    {
      path:"/ranking",
      element:<RankingMain></RankingMain>
    },
    {
      path:"/multi",
      element:<Multi></Multi>
    },
    {
      path:"/challenger",
      element:<ChallengerMain></ChallengerMain>
    },
    {
      path:"/event",
      element:<EventMain></EventMain>
    },
    {
      path:"/search",
      element:<SearchPage></SearchPage>
    },
    {
      path:"/details",  
      // 위에 path는 parameter를 받아서 여기로 넘겨야함.
      // 그래서 특정 챔피언의 정보를 갖고 올 수 있도록 해야함
      element:<ChampionsDetails></ChampionsDetails>
    },
]);

export default router;