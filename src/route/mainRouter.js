import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import RankingMain from "../view/page/ranking/rankingMain";

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
      path:"/multi"
    },
    {
      path:"/challenger"
    },
    {
      path:"/event"
    },
]);

export default router;