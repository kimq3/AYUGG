import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'view/nav';
import { Container, StatusTable, StatusTableHeader, StatusTableRow, TableBody, StatusTableDataContainer, StatusTableData,  MainDiv, RankStatusTableRow, NickStatusTableRow  } from 'view/page/ranking/rakingMainstyle';



const dummyData = [
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "DEIkawd7RE-B2waKaY65vDrc3kQf4NVp48tF_TI7AcR8AqU",
      summonerName: "dlwlrma22",
      leaguePoints: 1940,
      wins: 288,
      losses: 202,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "tu8xhKgy5Vq92c5WA1c7rZ0b79Klcsv2zgthrrvPFa9xGAY",
      summonerName: "스트레스유발협곡",
      leaguePoints: 1933,
      wins: 208,
      losses: 136,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "nlSfW4DdLttUVuFW297u7WAkeevdQT0B2wzpAdMI0tZ7Twk",
      summonerName: "Radiohead",
      leaguePoints: 1733,
      wins: 389,
      losses: 329,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "6hKBSlnf2m7K1F0xTiXw64ASu5x5VAlB_WR0mMPEzuDD5kc",
      summonerName: "Khae1",
      leaguePoints: 1722,
      wins: 259,
      losses: 188,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "z4gfCShAoTN6e1VBP0HZ_TQH34SCZfj2fZp-2tslG_vgxjIy",
      summonerName: "FA Moham",
      leaguePoints: 1712,
      wins: 532,
      losses: 451,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "HjW2-UTHzHGy0odDCQaFlJz09XGvL_arUZ_lqj0QYb7t4O0yJ2CueRoK7Q",
      summonerName: "번뇌를 잊다",
      leaguePoints: 1708,
      wins: 245,
      losses: 151,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "MDItgK4pHuZma9mZdAZHXWMEeg644WRBoZpLdXZS-ACrTxg",
      summonerName: "윤용호",
      leaguePoints: 1701,
      wins: 333,
      losses: 253,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "xDEPvL3HI0nFoo1tOr6gtPC0nbM45I9sSFxTRLvIJ05g311I",
      summonerName: "DK Pullbae",
      leaguePoints: 1618,
      wins: 380,
      losses: 302,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "tIsLOKwDHRhShz06ujGrY3qIkEOpIsY0dlQsvIofpK6lHlp2dWw00a0HqA",
      summonerName: "숟가락전사",
      leaguePoints: 1590,
      wins: 414,
      losses: 345,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "UzTsF3twTrT-JDxoToOqACCkXhdJA5fHXq4DG_B3ifmtjGg",
      summonerName: "어쩌라고맞짱뜰까",
      leaguePoints: 1586,
      wins: 231,
      losses: 167,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "4B_a2pFGIaz3H_1mz_q0JPHqP6_Uud1Tz3eghRf_cz98ZM8",
      summonerName: "HLE Roamer",
      leaguePoints: 1571,
      wins: 380,
      losses: 317,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "QPFZ2vlVyD3SNjCY8lKXaAEppQrnFX5jeCHTxVkjk3E0pJY",
      summonerName: "NS Callme",
      leaguePoints: 1561,
      wins: 483,
      losses: 415,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "-h4MdpasAd0PChe_UOgoWhZGy4dI2wBPAyuPju1kYa_-lUM",
      summonerName: "xycg",
      leaguePoints: 1550,
      wins: 434,
      losses: 364,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "x6uhkAnS-4Q8g0Y3rIdAB8JG3xBhsEv28LupOGadO4gpHdU",
      summonerName: "BRO Karis",
      leaguePoints: 1549,
      wins: 322,
      losses: 263,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "slRHKLXLXkXeeL69fH_qOiPExw9SPKbUHydaW_F4VqbMztvSX6o5q-xwZA",
      summonerName: "qazwsxedcrfvdf",
      leaguePoints: 1528,
      wins: 276,
      losses: 205,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "GtdX2vLqD_Prn-kehubuGELx7GjitWQEbSfBFMSOBvKbDahfE5i_FguAZw",
      summonerName: "hwa i tings",
      leaguePoints: 1503,
      wins: 630,
      losses: 564,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "wT5ovdk5vl6m7scmV9ke9sYu00Hz6NeVAEKKPT88PBap5L8",
      summonerName: "hhhhbbbb",
      leaguePoints: 1502,
      wins: 308,
      losses: 235,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "2N1cKlGTVZoGMy1huYOyeid40NhO0ANw_7buNNms0v8lR8I",
      summonerName: "HLE Lure",
      leaguePoints: 1480,
      wins: 383,
      losses: 307,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: true,
    },
    {
      leagueId: "966df365-7dea-34ca-839a-2cec050ba64a",
      queueType: "RANKED_SOLO_5x5",
      tier: "CHALLENGER",
      rank: "I",
      summonerId: "8QLOZXhxPCIYIOixmTgW2fjD2nnWtjRYLt6PFht_Wu7DRGlu",
      summonerName: "디알엑스스",
      leaguePoints: 1474,
      wins: 415,
      losses: 354,
      veteran: true,
      inactive: false,
      freshBlood: false,
      hotStreak: false,
    },
  ];

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

function Status(){
    return(
        <Container >
            <StatusTable>
                <StatusTableHeader>
                    <RankStatusTableRow>순위</RankStatusTableRow>
                    <NickStatusTableRow>닉네임</NickStatusTableRow>
                    <StatusTableRow>티어</StatusTableRow>
                    <StatusTableRow>리그포인트</StatusTableRow>
                </StatusTableHeader>
                <TableBody>
                    {dummyData
                        .sort((a, b) => b.leaguePoints - a.leaguePoints)
                        .map((data, index) => (
                            <StatusTableRowItem key={index} data={data} index={index} />
                    ))}
                </TableBody>
            </StatusTable>
        </Container>
    );
}


function RankingMain(){
    return(
        <div>
            <Nav></Nav>
            <MainDiv>
                <Status></Status>
                <Status></Status>
            </MainDiv>
        </div>
    );
}

export default RankingMain;