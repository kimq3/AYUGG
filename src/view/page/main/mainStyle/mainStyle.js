import styled from 'styled-components';
// import logo from '@/image/logo/body-logo.png';
import logo from 'asset/image/logo/body-logo.png';


export const Logo = styled.img`
    width: 600px;
    height: 400px;
    margin-top: 30px;
`;

Logo.defaultProps = {
    src: logo,
  };