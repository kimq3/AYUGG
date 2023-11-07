import styled from 'styled-components';

export const ChampionsBox = styled.div`
    width:1000px;
    height:${(props) => props.height};;
    margin: 50px auto;
    background-color:rgb(160, 160, 160);
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius : 4px;
`;

export const WrappingBox = styled.div`
    width:auto;
    hight:100%;
    padding-left: 15px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;

export const ChampionsSelect = styled.select`
    width:auto;
    height:30px;
    margin-right:10px;
    border-radius : 4px;
    border-color : #fff;
    font-size:16px;
`;

export const LineButton = styled.div`
    width: 90px;
    height: 30px;
    cursor : pointer;
    border: 1px solid #fff;
    border-radius : 4px;
    margin-right:15px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    &:hover{
        background-color:rgb(66, 66, 253);
        color:#fff;
    }
    ${ props => {
        if (props.pathname === props.line) {
            let select = "background-color:rgb(66, 66, 253); color:#fff;"
            return select;
        } else {
            let select = "background-color:#fff; color:black;"
            return select;
        }
      }}
`;

export const ArticleBox = styled.div`
    width:auto;
    height:100px;
    box-sizing: border-box;
    margin: 10px 15px;
    background-color : #fff;
`;

export const ChampionInput = styled.input`
    width:80%;
    height:30px;
    font-size : 18px;
    border:none;
    margin: 15px 5px;
    padding: 0 5px;
    &:active{
        border:none;
    }
`;

export const ResetButton = styled.button`
    background-color : #fff;
    border: none;
    font-size : 18px;
    font-weight : 700;
    cursor:pointer;
`;

export const ChampionsImgStyle = styled.img`
    width = 24;
`;