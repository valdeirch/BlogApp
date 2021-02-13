import React from 'react';

// Components
import List from '../../components/List';
import PostItem from '../../components/PostItem';

const Posts = ({navigation}) => {
  return <List navigation={navigation} Component={PostItem} query="posts" />;
};

export default Posts;
