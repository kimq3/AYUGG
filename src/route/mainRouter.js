import {
    createBrowserRouter,
} from "react-router-dom";
<<<<<<< HEAD
import App from "../App";
import RankingMain from "../view/page/ranking/rankingMain";
import Multi from "../view/page/multi/multiPage";
import StaticMain from "../view/page/static/staticMain";
import EventMain from "../view/page/event/eventMain";
import ChampionMain from "../view/page/champions/champions";
import ChallengerMain from "../view/page/challenger/challengerMain";
=======
import App from "App";
import RankingMain from "view/page/ranking/rankingMain";
import Multi from "view/page/multi/multiPage";
import EventMain from "view/page/event/eventMain";
import ChampionMain from "view/page/champion/championMain";
import ChallengerMain from "view/page/challenger/challengerMain";
import StatisticsMain from "view/page/statistics/statisticsMain";
>>>>>>> 3391b42ecfdf2eb933ceff1890c15d605afa0fd2

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
]);

export default router;