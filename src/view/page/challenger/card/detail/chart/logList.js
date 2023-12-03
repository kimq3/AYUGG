import * as style from "view/page/challenger/style/detailStyle";

function LogList(props){
    return(
        <style.UL>
            <style.LI>{props.data[0].value}</style.LI>
            <style.LI>{props.data[1].value}</style.LI>
            <style.LI>{props.data[2].value}</style.LI>
            <style.LI>{props.data[3].value}</style.LI>
            <style.LI>{props.data[4].value}</style.LI>
        </style.UL>
    );
}

export default LogList;