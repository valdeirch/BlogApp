import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {Container, Title, User, Image} from './styles';

const PhotoItem = ({item, user}) => {
  return (
    <Container>
      <Image source={{uri: item.url}} />
      <Title>{item.title}</Title>
      <User>@{user || 'User'}</User>
    </Container>
  );
};

export default PhotoItem;

PhotoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  user: PropTypes.string,
};

PhotoItem.defaultProps = {
  user: null,
};
