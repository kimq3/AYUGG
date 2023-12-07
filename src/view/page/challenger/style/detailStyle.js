import styled from "styled-components";

export const Maindiv = styled.div`
    margin : 20px auto;
    width : 900px;
    height : 330px;
    background-color :#fff;
    padding : 10px;
    border-radius : 5px;
`;

export const FilDiv=styled.div`
    display : flex;
    padding : 5px;
    margin-left : 10px;
`;

export const Button=styled.button`
    width : 50px;
    height : 25px;
    border : none;
    border-radius : 5px;
    background-color : grey;
    margin-left : 5px;

    &:hover {
        cursor : pointer;
        background-color : #3896D9;
        color : #fff;
    }

    &:focus {
        background-color: #2572DB; 
        color: #fff;
    }
`;

export const Titlediv=styled.div`
    padding : 10px;
    margin-left : 10px;
`;

export const MainGraph=styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color:#CCCCCC;
    border-radius : 5px;
`;

export const LeftGraph=styled.div`
    width : 250px;
    height : 230px;
    padding : 10px;
`;

export const RightGraph=styled.div`
    width : 250px;
    height : 230px;
    padding : 10px;
`;

export const Number = styled.div`
    width : 80px;
    height : 230px;
    padding : 10px;
`;

export const UL = styled.ul`
    list-style-type : none;
    padding-inLine-start : 0px; 
    margin-block-start : 15px;
`;

export const LI = styled.li`
    margin-bottom: 18px;
`;

export const Img=styled.img`
    width:32px;
    height:32px;
    background-color:gray;
    margin-left:3px;
`;

export const ImgLI = styled.li`
    margin-bottom: 3px;
    margin-left:50px;
`;

export const ImgUL = styled.ul`
    list-style-type : none;
    padding-inLine-start : 0px; 
    margin-block-start : 8px;
`;