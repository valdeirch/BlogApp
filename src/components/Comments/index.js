import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// API
import api from '../../services/api';

// Compoenents
import Comment from './Comment';

// Styles
import {Container, Title, List} from './styles';

const Comments = ({idPost}) => {
  const [canPaginate, setCanPaginate] = useState(true);
  const [limit, setLimit] = useState(10);
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    if (idPost) {
      const response = await api.get(
        `posts/${idPost}/comments?_start=0&_limit=${limit}`,
      );
      if (limit > response.data.length) {
        setCanPaginate(false);
      }
      setComments(response.data);
    }
  }, [idPost, limit]);

  useEffect(() => {
    getComments();
  }, [getComments, limit]);

  const renderItem = useCallback(({item}) => {
    return <Comment item={item} />;
  }, []);

  const handlePaginate = useCallback(() => {
    if (canPaginate) {
      setLimit((old) => old + 10);
    }
  }, [canPaginate]);

  return (
    <Container>
      <Title>Comments</Title>
      <List
        keyExtractor={(item) => item.id.toString()}
        data={comments}
        renderItem={renderItem}
        onEndReached={() => handlePaginate()}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default Comments;

Comments.propTypes = {
  idPost: PropTypes.number.isRequired,
};
