import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import RankingMain from "../view/page/ranking/rankingMain";
import MultiPage from "../view/page/multi/multiPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/champion"
    },
    {
      path:"/static"
    },
    {
      path:"/ranking",
      element:<RankingMain></RankingMain>
    },
    {
      path:"/multi",
      element:<MultiPage />
    },
    {
      path:"/challenger"
    },
    {
      path:"/event"
    },
]);

export default router;