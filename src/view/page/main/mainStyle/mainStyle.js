import styled from 'styled-components';
import logo from 'assets/images/logo/body-logo.png';

export const Logo = styled.img`
    width: 600px;
    height: 400px;
    margin-top: 30px;
`;

Logo.defaultProps = {
    src: logo,
  };