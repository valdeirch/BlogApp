import React from 'react';
import PropTypes from 'prop-types';

import {Container, User, Email, Description} from './styles';

const Comment = ({item}) => {
  return (
    <Container>
      <User>{item.name}</User>
      <Email>{item.email}</Email>
      <Description>{item.body}</Description>
    </Container>
  );
};

export default Comment;

Comment.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};
