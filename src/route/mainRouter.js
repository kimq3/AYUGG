import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import RankingMain from "../view/page/ranking/rankingMain";
import Multi from "../view/page/multi/multiPage";
import StaticMain from "../view/page/static/staticMain";
import EventMain from "../view/page/event/eventMain";
import ChampionMain from "../view/page/champions/champions";
import ChallengerMain from "../view/page/challenger/challengerMain";

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
      path:"/static",
      element:<StaticMain></StaticMain>
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