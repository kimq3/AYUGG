import styled from 'styled-components';

export const BlankDiv = styled.div`
  height: 21px;
`;
export const ContainerDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 300px;
`;
export const CustomTextarea = styled.textarea`
  background: #626367;
  color: white;
  font-size: 14px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  resize: none;
  padding: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CountrySelect = styled.select`
  font-size: 14px;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;
export const SearchButton = styled.button`
  font-size: 14px;
  background: orange;
  margin-right: -20px;
  border-radius: 4px;
  border: none;
  padding: 5px 40px;
  cursor: pointer;
`;
export const ResultDiv = styled.div`
  display: flex;
  justify-content: center;
`;