import styled, {css} from 'styled-components/native';

import colors from '../../Assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: ${colors.text};
  text-align: center;
  font-size: 50px;
`;

export const FormContainer = styled.View`
  padding: 20px;
  height: 160px;
  justify-content: space-between;
`;

export const InputEmail = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: ${colors.input};
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  background-color: ${colors.button}
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${colors.disabled};
    `}
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ErrorMessage = styled.Text`
  color: ${colors.danger};
  text-align: center;
`;
