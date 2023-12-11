import styled from "styled-components";

export const Table=styled.table`
    border-collapse: collapse;
    width: 80%;
    margin: 25px auto;
    
`;

export const FilTable=styled.table`
    border-collapse: collapse;
    width: 80%;
    margin: 25px auto;
    background-color: gray;
`;

export const Th=styled.th`
    border-bottom: 3px solid #dddddd;
    text-align: center;
    padding: 8px;
`;

export const Tr=styled.tr`
    border-bottom: 1px solid #dddddd;
    color: white;
`;

export const Td=styled.td`
    text-align: center;
    padding: 10px;
    color: white;
`;

export const Tds=styled.td`
    font-weight: bold;
    color: white;
`;

export const TdName=styled.td`
    font-weight: bold;
    color: white;
    display: flex;
`;

export const NameSpan=styled.span`
    padding: 10px;
`;

export const MainDiv=styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: space-around;
`;


export const FilDiv=styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Filth=styled.th`
    text-align: center;
    padding: 15px;
    color: black;
`;

export const Button1=styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius:10px;
    background-color:#fff;

    &:hover {
        cursor: pointer;
        background-color:#3896D9;
        color:#fff;
    }
`;

export const FilTd=styled.td`
    text-align: center;
    padding: 10px;
    font-weight: bold;
`;

export const IconImage=styled.img`
    padding: 10px;
    width: 25px;
    height: 25px;
    resizeMode: contain;
    margin-right: 5px;
`;

/* --------------------------------------------- */
// custom gauge chart styled component 영역

export const Parentdiv = styled.div`
    height: ${(props)=> props.$height}px;
    width: 100px;
    background-color: whitesmoke;
    margin: 5px;
`;

export const Childdiv = styled.div`
    height: 100%;
    width: ${(props)=> props.$width}%;
    background-color: ${(props)=> props.$bgcolor};
`;