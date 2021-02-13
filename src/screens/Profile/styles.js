import styled, {css} from 'styled-components/native';

// Colors
import colors from '../../Assets/colors';

export const Head = styled.View`
  background-color: ${colors.primary};
  padding: 15px;
  margin-top: 10px
    ${(props) =>
      props.first &&
      css`
        margin: 0;
      `};
`;

export const Button = styled.TouchableOpacity`
  margin: 0 10px;

  ${(props) =>
    props.tab &&
    css`
      flex: 1;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.white};

  ${(props) =>
    props.name &&
    css`
      font-size: 25px;
      text-align: center;
      margin-top: 10px;
    `};

  ${(props) =>
    props.userName &&
    css`
      font-size: 22px;
      text-align: center;
    `};

  ${(props) =>
    props.email &&
    css`
      font-size: 16px;
      text-align: center;
    `};
`;

export const TopTab = styled.View`
  flex-direction: row;
`;

export const Tab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;

  border-top-width: 1px;
  border-top-color: ${colors.borderColor};

  background-color: ${colors.white};

  ${(props) =>
    props.active &&
    css`
      background-color: ${colors.primary};
    `}
`;

export const ExitContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 0;
`;
