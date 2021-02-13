import styled from 'styled-components/native';

// Colors
import colors from '../../Assets/colors';

export const Container = styled.View`
  height: auto;
  background-color: ${colors.transparentGray};
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${colors.white};
  margin-bottom: 10px;
  font-size: 20px;
`;

export const User = styled.Text``;
