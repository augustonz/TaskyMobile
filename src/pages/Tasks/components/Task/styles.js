import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.KeyboardAvoidingView`
  padding: 10px;
  border-radius: 10px;
  height: 60px;
  width: 100%;
  border: 1px solid #be70cb;
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: center
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

export const TaskWrapper = styled.View`
  width: 65%;
  height: 100%;
  justify-content: center
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;
export const EditIcon = styled(Icon)`
  color: #000000;
  font-size: 24px;
`;

export const DeleteIcon = styled(Icon)`
  color: #ff8989;
  font-size: 24px;
`;
