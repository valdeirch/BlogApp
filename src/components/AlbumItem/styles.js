import styled from 'styled-components/native';

// Colors
import colors from '../../Assets/colors';

export const Container = styled.View`
  height: auto;
  background-color: ${colors.transparentGray},
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
`;

export const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const User = styled.Text`
  text-align: center;
`;
