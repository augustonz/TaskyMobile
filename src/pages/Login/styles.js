import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LoadingIcon = styled(Icon)`
    color: #000000;
`

export const Container = styled.KeyboardAvoidingView`
    padding: 30px;
    justify-content: center;
    align-items: center;
    height: 100%
`;

export const Link = styled.Text`
    color: #0000ff;
`;

export const ErrorMsg = styled.Text`
    color: #ff0000;
`

export const Text = styled.Text`
`