import Nav from "view/nav";
import { Logo } from "view/page/main/mainStyle/mainStyle";
import Search from "view/page/main/searchBox";

function Main(){
    return(
        <>
            <Nav></Nav>
            <Logo></Logo>
            <Search></Search>
        </>
    )
}

export default Main;