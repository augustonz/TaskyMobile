import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  height: 45px;
  background-color: #be70cb;
  padding: 10px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 25px;
`;

export const LogoutIcon = styled(Icon)`
  color: #000000;
  font-size: 24px;
`;
