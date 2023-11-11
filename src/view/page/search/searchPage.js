import Nav from "view/nav";
import TopBox from "view/page/search/topBox.js"

function SearchPage(){
    return (
        <div>
            <Nav></Nav>
            <TopBox />
            {/* <ContainerDiv>
                <TopDiv />
                <RefreshButton />
                <BottomDiv />
            <ContainerDiv/> */}
        </div>
    );
}

export default SearchPage;