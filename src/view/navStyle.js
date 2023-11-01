import styled from 'styled-components';
import logo from '../view/image/logo/navbar-logo.png';
import search from '../view/image/search-icon/search-icon-24.svg';

export const NavBox = styled.div`
    display: flex;
    margin-top: -7px;
    margin-left: -8px;
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    background-color: black;
    justify-content: space-between;
`;

export const NavBoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

export const Logo = styled.img`
    margin-right : 10px;
    padding-top : 5px;
    width: 70px;
    height: 100%;
    cursor:pointer;
    margin-left:10px;
`;

Logo.defaultProps = {
    src: logo,
  };

export const NavButton_S = styled.button`
    height: 60%;
    font-size: 14px;
    background-color: #000000;
    color: #fff;
    position: relative;
    cursor: pointer;
    padding: 0 15px;
    margin: 0 10px;
    border:none;
    border-radius: 4px; 
`;

export const NavBoxSearch = styled.div`
    max-width:250px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right : 20px;
`;

export const Search = styled.div`
    width: 250px;
    height: 60%;
    background-color : #fff;
    border-radius: 4px;
    padding: 2px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:5px;
`;

export const SearchSelect = styled.select`
  width : 50px;
  height: 80%;
  margin-right:5px;
  margin-left:5px;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  font-size : 16px;
  width:70%;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
    background-color: #fff;
    border: none;
    width:24px;
    height:24px;
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const SearchIcon = styled.img`
    width: 16px;
    height: 16px;
    cursor:pointer;
`;

SearchIcon.defaultProps = {
    src: search,
  };