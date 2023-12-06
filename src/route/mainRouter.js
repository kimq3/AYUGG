import {
    createBrowserRouter,
} from "react-router-dom";
import App from "App";
import Multi from "view/page/multi/multiPage";
import EventMain from "view/page/event/eventMain";
import ChampionsMain from "view/page/champions/championsMain";
import ChallengerMain from "view/page/challenger/challengerMain";
import StatisticsMain from "view/page/statistics/statisticsMain";
import SearchPage from "view/page/search/searchPage";
import ChampionsDetails from "view/page/details/detailsMain";
import RankingDetail from "view/page/ranking/rankingDetailSolo";
import RankingMain from "view/page/ranking/rankingMain";
import RankingDetailFlex from "view/page/ranking/rankingDetailFlex";

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
      path:"/ranking/solo",
      element:<RankingDetail></RankingDetail>
    },
    {
      path:"/ranking/flex",
      element:<RankingDetailFlex></RankingDetailFlex>
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
      path:"/details/:id",
      element:<ChampionsDetails></ChampionsDetails>
    },
]);

export default router;