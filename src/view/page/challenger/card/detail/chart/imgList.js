import * as styled from "view/page/challenger/style/detailStyle";
import { GetChampImg } from "view/page/search/dataHandling/filterData";

function ImgList(props){
    return(
        <styled.ImgUL>
            <styled.ImgLI><styled.Img src={GetChampImg(props.data[0].image)}/></styled.ImgLI>
            <styled.ImgLI><styled.Img src={GetChampImg(props.data[1].image)}/></styled.ImgLI>
            <styled.ImgLI><styled.Img src={GetChampImg(props.data[2].image)}/></styled.ImgLI>
            <styled.ImgLI><styled.Img src={GetChampImg(props.data[3].image)}/></styled.ImgLI>
            <styled.ImgLI><styled.Img src={GetChampImg(props.data[4].image)}/></styled.ImgLI>
        </styled.ImgUL>
    );
}

export default ImgList;