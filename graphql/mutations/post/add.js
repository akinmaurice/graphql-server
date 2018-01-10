import {
  GraphQLNonNull,
} from 'graphql';

import { postType, postInputType } from '../../types/post';
import PostModel from '../../../models/Post';

export default {
  type: postType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType),
    },
  },
  resolve(root, params) {
    const post = new PostModel(params.data);
    const newPost = post.save();
    if (!newPost) {
      throw new Error('Error Adding New Post');
    }
    return newPost;
  },
};
