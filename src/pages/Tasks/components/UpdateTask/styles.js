import styled from 'styled-components';

export const Container = styled.View`
    padding: 10px;
    border-radius: 20px;
    align-items: center;
    height: 150px;
    width: 90%;
`

export const Row = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`

export const Label = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #000000;
`

export const SubmitButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
    border-radius: 50px;
    background-color: #be70cb;
    margin: 8px 0px 16px 4px;
    align-items: center;
    width: 50%;
`

export const SubmitButtonCancel = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
    border-radius: 50px;
    background-color: #C82C2C;
    margin: 8px 4px 16px 0px;
    align-items: center;
    width: 50%;
`

export const Text = styled.Text`
font-size: 16px;
font-weight: 700;
color: #ffffff;
`