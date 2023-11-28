import styled from "styled-components";
import { Link } from "react-router-dom";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const NavBox = styled(FlexBox)`
  margin-top: -7px;
  margin-left: -8px;
  width: 100%;
  height: 62px;
  padding: 5px 10px;
  background-color: black;
  align-items: normal;
  justify-content: space-between;
`;

export const ListStyle = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  &:hover {
    color: #fff;
  }
  ${(props) => {
    if (props.$pathname === props.$url) {
      return "color: white;";
    } else {
      return "color: rgba(255, 255, 255, 0.5);";
    }
  }}
`;

export const NavBoxButton = styled(FlexBox)`
  width: auto;
  margin-left: 10px;
`;

export const ListBox = styled(FlexBox)`
  min-width: ${(props)=> props.$width};
  height: 60%;
  margin-left: 15px;
  border: 0px solid;
  border-bottom-width: 2px;
  &:hover {
    border: 0px solid;
    border-color: #fff;
    border-bottom-width: 2px;
  }
  ${(props) => {
    if (props.$pathname === props.$url) {
      return "border-color: white;";
    } else {
      return "border-color: black;";
    }
  }}
`;

export const Logo = styled.img`
  margin-right: 10px;
  padding-top: 5px;
  width: 70px;
  height: 100%;
  cursor: pointer;
  margin-left: 10px;
`;

export const NavBoxSearch = styled(FlexBox)`
  width: auto;
  height: 100%;
  justify-content: space-between;
  margin-right: 15px;
`;

export const Search = styled(FlexBox)`
  width: 250px;
  height: 60%;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 5px;
  justify-content: space-between;
  margin-top: 5px;
`;

export const SearchSelect = styled.select`
  width: 50px;
  height: 80%;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  width: 60%;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  margin-right: 3px;
`;
