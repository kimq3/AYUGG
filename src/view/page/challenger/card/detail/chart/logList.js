import * as styled from "view/page/challenger/style/detailStyle";

function LogList(props){
    return(
        <styled.UL>
            <styled.LI>{props.data[0].value}</styled.LI>
            <styled.LI>{props.data[1].value}</styled.LI>
            <styled.LI>{props.data[2].value}</styled.LI>
            <styled.LI>{props.data[3].value}</styled.LI>
            <styled.LI>{props.data[4].value}</styled.LI>
        </styled.UL>
    );
}

export default LogList;