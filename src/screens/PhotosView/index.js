import React, {useEffect} from 'react';

// Components
import List from '../../components/List';
import PhotoItem from '../../components/PhotoItem';

// Styles
import {Container} from './styles';

const PhotosView = ({navigation, route}) => {
  const {albumId, user} = route.params;

  useEffect(() => {
    navigation.setOptions({headerTitle: `@${user} Photos`});
  }, [navigation, user]);

  return (
    <Container>
      <List
        user={user}
        query="photos"
        idField="albumId"
        id={albumId}
        Component={PhotoItem}
      />
    </Container>
  );
};

export default PhotosView;
