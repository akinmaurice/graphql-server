import {
  GraphQLList,
} from 'graphql';

import { postType } from '../../types/post';
import PostModel from '../../../models/Post';

export default {
  type: new GraphQLList(postType),
  resolve() {
    const posts = PostModel.find().exec();
    if (!posts) {
      throw new Error('Error Fetching Posts');
    }
    return posts;
  },
};
