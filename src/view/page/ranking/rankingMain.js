import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'view/nav';

function RankingMain(){
    return(
        <div>
            <Nav></Nav>
            <Link to="/ranking/solo"> 솔로 자세히 보기 </Link>
            <Link to="/ranking/flex">자유 자세히 보기</Link>
        </div>
    );
}

export default RankingMain;