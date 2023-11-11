import {
    createBrowserRouter,
} from "react-router-dom";
import App from "App";
import RankingMain from "view/page/ranking/rankingMain";
import Multi from "view/page/multi/multiPage";
import EventMain from "view/page/event/eventMain";
import ChampionMain from "view/page/champion/championMain";
import ChallengerMain from "view/page/challenger/challengerMain";
import StatisticsMain from "view/page/statistics/statisticsMain";
import SearchPage from "view/page/search/searchPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/champion",
      element: <ChampionMain></ChampionMain>
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
]);

export default router;