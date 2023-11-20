import styled from 'styled-components';

export const MatchButtons = styled.div`
  text-align: left;
`
export const MatchButton = styled.button`
  width: 110px;
  color: white;
  background: rgb(47, 47, 47);
  border: 0;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  &:after{
    padding-left: 16px;
    content: "";
    position: absolute;
    transform: scaleX(${ props => (props.isclick === props.value ? 1 : 0)});
    width: 90px;
    height: 1px;
    background-color: #fff;
    left: 3px;
    bottom: -5px;
  }
  &:hover:after,
  &:focus:after {
    transform: scaleX(1);
  }
`
export const MoreMatchButton = styled.button`
  width: 1000px;
  padding: 5px;
  border: 2px solid #626367;
  cursor: pointer;
`