import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// API
import api from '../../services/api';

// Styles
import {Container, Title, User, Button, Image} from './styles';

const AlbumItem = ({item, user = null, navigation}) => {
  const [userName, setUserName] = useState(user);
  const [albumImage, setAlbumImage] = useState(null);

  const getUser = useCallback(async () => {
    if (!user) {
      const response = await api.get(`users?id=${item.userId}`);
      if (response.data[0].username) {
        setUserName(response.data[0].username);
      }
    }

    if (!albumImage) {
      const response = await api.get(
        `photos?albumId=${item.id}&_start=0&_limit=1`,
      );
      if (response.data[0].thumbnailUrl) {
        setAlbumImage(response.data[0].thumbnailUrl);
      }
    }
  }, [albumImage, item.id, item.userId, user]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const handleOnPress = useCallback(() => {
    navigation.navigate('PhotosView', {albumId: item.id, user: userName});
  }, [item.id, navigation, userName]);

  return (
    <Container>
      <Button onPress={() => handleOnPress()}>
        <Image source={{uri: albumImage}} />
        <Title>{item.title}</Title>
        <User>@{userName || 'User'}</User>
      </Button>
    </Container>
  );
};

export default AlbumItem;

AlbumItem.propTypes = {
  item: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  user: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

AlbumItem.defaultProps = {
  user: null,
};
