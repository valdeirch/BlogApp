import React from 'react';

// Components
import PostItem from '../../components/PostItem';
import Comments from '../../components/Comments';

// Styles
import {Container} from './styles';

const PostView = (props) => {
  const {post, user} = props.route.params;

  return (
    <Container>
      <PostItem item={post} user={user} postView />
      <Comments idPost={post.id} />
    </Container>
  );
};

export default PostView;
