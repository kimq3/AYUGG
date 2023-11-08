import styled from 'styled-components';

export const ChampionsBox = styled.div`
    width : 1000px;
    height : ${(props) => props.height};;
    margin : 50px auto;
    background-color : rgb(160, 160, 160);
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-radius : 4px;
`;

export const WrappingBox = styled.div`
    width : auto;
    hight : 100%;
    padding-left: 15px;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
`;

export const ChampionsSelect = styled.select`
    width : auto;
    height : 30px;
    margin-right : 10px;
    border-radius : 4px;
    border-color : #fff;
    font-size : 16px;
`;

export const LineButton = styled.div`
    width : 90px;
    height: 30px;
    cursor : pointer;
    border : 1px solid #fff;
    border-radius : 4px;
    margin-right : 15px;
    display : flex;
    align-items : center;
    justify-content : center;
    font-size : 18px;
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
    width : ${ props => props.width };
    height : auto;
    box-sizing : border-box;
    margin : 15px 15px;
    background-color : #fff;
    border-radius : 4px;
`;

export const ChampionsInputBox = styled.div`
    width : auto;
    height : 50px;
    display : flex;
    align-items : center;
    border : 1px solid grey;
    margin : 10px 10px;
    border-radius : 4px;
`;

export const ChampionsInput = styled.input`
    width : 85%;
    height : 30px;
    font-size : 18px;
    border : none;
    margin: 15px 5px;
    padding: 0 5px;
    &:active{
        border:none;
    }
`;

export const ResetButton = styled.button`
    background-color : #fff;
    border : none;
    font-size : 18px;
    font-weight : 700;
    cursor : pointer;
`;

export const ChampionsOlStyle = styled.ol`
    width : auto;
    box-sizing : border-box;
    list-style : none;
    justify-content : center;
    align-items : center;
    margin-block-start : 0px;
    margin-left : 20px;
    padding-left : 0px;
`;

export const ListBox = styled.div`
    width : 54px;
    height : 72px;
    display : inline-flex;
    align-items : center;
    justify-content : center;
    margin : 5px 10px;
`;

export const ChampionsImgStyle = styled.img`
    width : 48px;
    height : 48px;
    border-radius : 4px;
    cursor : pointer;
`;

export const ChampionsSpanStyle = styled.div`
    width : 54px;
    font-size : 12px;
    box-sizing : border-box;
    padding-left : 5px;
    cursor : pointer;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
`;