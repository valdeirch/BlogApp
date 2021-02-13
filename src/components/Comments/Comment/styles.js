import styled from 'styled-components/native';

// Colors
import colors from '../../../Assets/colors';

export const Container = styled.View`
  height: auto;
  background: ${colors.white};
  margin: 10px;
  border-width: 1px;
  border-color: lightgray;
  border-radius: 10px;
  padding: 15px;
`;

export const User = styled.Text`
  font-size: 16px;
  color: ${colors.commentUser};
`;

export const Email = styled.Text`
  font-size: 12px;
  color: ${colors.commentEmail};
  margin-bottom: 15px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.commentDescription};
`;
