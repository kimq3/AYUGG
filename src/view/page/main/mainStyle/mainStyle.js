import styled from 'styled-components';
import logo from '../../../image/logo/body-logo.png';

export const Logo = styled.img`
    margin-top:30px;
    width: 600px;
    height: 400px;
`;

Logo.defaultProps = {
    src: logo,
  };


function test(){
    return;
}