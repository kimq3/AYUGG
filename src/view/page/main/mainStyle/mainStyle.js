import styled from 'styled-components';
<<<<<<< HEAD
// import logo from '@/image/logo/body-logo.png';
import logo from 'asset/image/logo/body-logo.png';

=======
import logo from 'assets/images/logo/body-logo.png';
>>>>>>> 3391b42ecfdf2eb933ceff1890c15d605afa0fd2

export const Logo = styled.img`
    width: 600px;
    height: 400px;
    margin-top: 30px;
`;

Logo.defaultProps = {
    src: logo,
  };