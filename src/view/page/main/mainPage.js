import Nav from "view/nav";
import { Logo } from "view/page/main/mainStyle/mainStyle";
import Search from "view/page/main/searchBox";

function Main(){
    return(
        <div>
            <Nav></Nav>
            <Logo></Logo>
            <Search></Search>
        </div>
    )
}

export default Main;