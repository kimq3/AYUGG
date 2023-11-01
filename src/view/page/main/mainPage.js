import Nav from "../../nav";
import logo from '../../image/logo/body-logo.png';

function Main(){
    return(
        <div>
            <Nav></Nav>
            <img src={logo} className="body-logo" />
        </div>
    )
}

export default Main;