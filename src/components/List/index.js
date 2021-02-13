import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// API
import api from '../../services/api';

// Styles
import {Container, FList} from './styles';

const List = ({navigation, query, idField, id, Component, user}) => {
  const [canPaginate, setCanPaginate] = useState(true);
  const [limit, setLimit] = useState(10);
  const [items, setItems] = useState([]);

  const getPosts = useCallback(async () => {
    const response = await api.get(
      `${query}${id ? `?${idField}=${id}&` : '?'}_start=0&_limit=${limit}`,
    );
    if (limit > response.data.length) {
      setCanPaginate(false);
    }

    setItems(response.data);
  }, [id, idField, limit, query]);

  useEffect(() => {
    getPosts();
  }, [getPosts, limit]);

  const renderItem = useCallback(
    ({item}) => {
      return <Component item={item} navigation={navigation} user={user} />;
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
      <FList
        keyExtractor={(item, index) => index.toString()}
        data={items}
        renderItem={renderItem}
        onEndReached={() => handlePaginate()}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
};

export default List;

List.propTypes = {
  query: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  user: PropTypes.string,
  idField: PropTypes.string,
  id: PropTypes.number,
};

List.defaultProps = {navigation: null, user: null, idField: null, id: null};
