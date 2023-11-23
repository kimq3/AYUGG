import styled from 'styled-components';

export const BodySearchBox = styled.div`
    width:100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-radius : 4px;
`;

export const SearchBox = styled.div`
    width:600px;
    height: 50px;
    margin-right: 10px;
    border-radius : 4px;
`;

export const Box = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    padding: 0 10px;
    border-radius : 4px;
`;

export const Select = styled.select`
    height:35px;
    width:60px;  
    font-size:18px;
    border-radius : 4px;
`;

export const Input = styled.input`
    font-size:18px;
    height:30px;
    width:80%;
    border-radius : 4px;
    &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
    width:35px;
    height:35px;
    background-color:#fff;
    border:none;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const Img = styled.img`
    width:24px;
    height:24px;
    cursor: pointer;
`;