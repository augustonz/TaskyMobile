import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 16px 32px;
  background-color: #ffff;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {padding: 16},
  ListFooterComponentStyle: {marginTop: 10, color: 636363, fontSize: 16},
})`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
