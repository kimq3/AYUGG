import Nav from "../../nav";
import { Logo } from "./mainStyle/mainStyle";
import Search from "./searchBox";

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