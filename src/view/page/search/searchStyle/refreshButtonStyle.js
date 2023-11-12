import styled from 'styled-components';
import reset from 'assets/images/reset-icon.svg';

export const RefreshButton = styled.button`
    display: flex;
    background: blue;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`
export const RefreshButtonImg = styled.img`
    padding: 8px 30px;
`
RefreshButtonImg.defaultProps = {
    src: reset,
};