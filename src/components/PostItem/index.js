import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// API
import api from '../../services/api';

// Styles
import {Container, Title, Description, User, Button} from './styles';

const PostItem = ({item, user = null, postView, navigation}) => {
  const [userName, setUserName] = useState(user);

  const getPosts = useCallback(async () => {
    if (!user) {
      const response = await api.get(`users?id=${item.userId}`);
      if (response.data[0].username) {
        setUserName(response.data[0].username);
      }
    }
  }, [item.userId, user]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderData = useCallback(() => {
    return (
      <>
        <Title>{item.title}</Title>
        <Description>{item.body}</Description>
        <User>{userName || 'User'}</User>
      </>
    );
  }, [item.body, item.title, userName]);

  const handleOnPress = useCallback(() => {
    navigation.navigate('PostView', {post: item, user: userName});
  }, [item, navigation, userName]);

  return (
    <Container>
      {!postView ? (
        <Button onPress={() => handleOnPress()}>{renderData()}</Button>
      ) : (
        renderData()
      )}
    </Container>
  );
};

export default PostItem;

PostItem.propTypes = {
  item: PropTypes.shape({
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  user: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  postView: PropTypes.bool,
};

PostItem.defaultProps = {
  navigation: null,
  user: null,
  postView: false,
};
