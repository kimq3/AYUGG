import Nav from "view/nav";
import TopBox from "view/page/search/topBox"
import { ContainerDiv } from "view/page/search/searchStyle/topBoxStyle"
import Button from "view/page/search/refreshButton"

function SearchPage(){
    return (
        <div>
            <Nav></Nav>
            <ContainerDiv>
                <TopBox />
                <Button />
                <br />

            </ContainerDiv>
            {/* <ContainerDiv>
                <TopDiv />
                <RefreshButton />
                <br />
                <BottomDiv />
            <ContainerDiv/> */}
        </div>
    );
}

export default SearchPage;