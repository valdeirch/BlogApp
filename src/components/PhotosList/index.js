import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// API
import api from '../../services/api';

// Components
import PhotoItem from '../PhotoItem';

// Styles
import {Container, List} from './styles';

const PhotosList = ({navigation, albumId, user}) => {
  const [canPaginate, setCanPaginate] = useState(true);
  const [limit, setLimit] = useState(10);
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    const response = await api.get(
      `photos${albumId ? `?albumId=${albumId}&` : '?'}_start=0&_limit=${limit}`,
    );

    if (limit > response.data.length) {
      setCanPaginate(false);
    }

    setPhotos(response.data);
  }, [limit, albumId]);

  useEffect(() => {
    getPhotos();
  }, [getPhotos, limit]);

  const renderItem = useCallback(
    ({item}) => {
      return <PhotoItem item={item} navigation={navigation} user={user} />;
    },
    [navigation, user],
  );

  const handlePaginate = useCallback(() => {
    if (canPaginate) {
      setLimit((old) => old + 10);
    }
  }, [canPaginate]);

  return (
    <Container>
      <List
        keyExtrator={(index) => index}
        data={photos}
        renderItem={renderItem}
        onEndReached={() => handlePaginate()}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default PhotosList;

PhotosList.propTypes = {
  albumId: PropTypes.number.isRequired,
  user: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

PhotosList.defaultProps = {
  user: null,
};
