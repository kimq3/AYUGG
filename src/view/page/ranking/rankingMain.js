import { getRankingMain } from 'model/api/rankingMain';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'view/nav';
import { Container, StatusTable, StatusTableHeader, StatusTableRow, TableBody, StatusTableDataContainer, StatusTableData,  MainDiv, RankStatusTableRow, NickStatusTableRow, BottomDiv, StyleLink  } from 'view/page/ranking/rakingMainstyle';



const StatusTableRowItem = (props) => {
    const { summonerName, tier, leaguePoints } = props.data;
  
    return (
      <StatusTableDataContainer>
        <StatusTableData>
          <RankStatusTableRow>{props.index + 1}</RankStatusTableRow>
          <NickStatusTableRow>{summonerName}</NickStatusTableRow>
          <StatusTableRow>{tier}</StatusTableRow>
          <StatusTableRow>{leaguePoints}LP</StatusTableRow>
        </StatusTableData>
      </StatusTableDataContainer>
    );
};

function Status(props){

    return(
        <Container >
            <StatusTable>
                {props.value ==='solo' ? <span>솔로랭크</span> : <span>자유랭크</span>}
                <StatusTableHeader>
                    <RankStatusTableRow>순위</RankStatusTableRow>
                    <NickStatusTableRow>닉네임</NickStatusTableRow>
                    <StatusTableRow>티어</StatusTableRow>
                    <StatusTableRow>리그포인트</StatusTableRow>
                </StatusTableHeader>
                <TableBody>
                    {(props.info).map((data, index) => (
                            <StatusTableRowItem key={index} data={data} index={index} />
                    ))}
                </TableBody>
                <StyleLink to={`/ranking/${props.value}`}>자세히보기</StyleLink>
            </StatusTable>
            
        </Container>
    );
}


function RankingMain(){

  const [solo , setSolo] = useState([]);
  const [flex , setFlex] = useState([]);

  useEffect(()=>{
    getRankingMain('solo')
    .then((data)=>{
      setSolo(data);
    });
    getRankingMain('flex')
    .then((data)=>{
      setFlex(data);
    });
  },[]);

    return(
        <div>
            <Nav></Nav>
            <MainDiv>
                <Status info={solo} value='solo'></Status>
                <Status info={flex} value='flex'></Status>
            </MainDiv>
        </div>
    );
}

export default RankingMain;