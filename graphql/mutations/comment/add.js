import {
  GraphQLNonNull,
} from 'graphql';

import { commentType, commentInputType } from '../../types/comment';
import CommentModel from '../../../models/Comment';

export default {
  type: commentType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(commentInputType),
    },
  },
  resolve(root, params) {
    const comment = new CommentModel(params.data);
    const newComment = comment.save();
    if (!newComment) {
      throw new Error('Error Adding New Comment');
    }
    return newComment;
  },
};
