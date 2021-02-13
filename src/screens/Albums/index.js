import React from 'react';

// Components
import List from '../../components/List';
import AlbumItem from '../../components/AlbumItem';

const Albums = ({navigation}) => {
  return <List navigation={navigation} Component={AlbumItem} query="albums" />;
};

export default Albums;
