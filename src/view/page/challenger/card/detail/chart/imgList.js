import * as style from "view/page/challenger/style/detailStyle";
import { GetChampImg } from "view/page/search/dataHandling/filterData";

function ImgList(props){
    return(
        <style.ImgUL>
            <style.ImgLI><style.Img src={GetChampImg(props.data[0].image)}/></style.ImgLI>
            <style.ImgLI><style.Img src={GetChampImg(props.data[1].image)}/></style.ImgLI>
            <style.ImgLI><style.Img src={GetChampImg(props.data[2].image)}/></style.ImgLI>
            <style.ImgLI><style.Img src={GetChampImg(props.data[3].image)}/></style.ImgLI>
            <style.ImgLI><style.Img src={GetChampImg(props.data[4].image)}/></style.ImgLI>
        </style.ImgUL>
    );
}

export default ImgList;