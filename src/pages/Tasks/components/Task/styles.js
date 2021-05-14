import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.KeyboardAvoidingView`
  padding: 10px;
  height: 65px;
  max-height: 120px;
  width: 100%;
  flex-direction: row;
  margin-bottom: 8px;
  justify-content: center
  align-items: center;
  border-width: 1;
  border-radius: 3;
  border-color: #dedede;
  shadow-color: #be70cb;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  elevation: 1;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

export const TaskWrapper = styled.View`
  width: 60%;
  height: 100%;
  justify-content: center
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 0px 4px;
`;
export const EditIcon = styled(Icon)`
  color: #000000;
  font-size: 24px;
`;

export const DeleteIcon = styled(Icon)`
  color: #C82C2C;
  font-size: 24px;
`;
