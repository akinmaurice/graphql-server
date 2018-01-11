import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import { postType } from '../../types/post';
import PostModel from '../../../models/Post';

export default {
  type: postType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    return PostModel.findById(params.id).exec();
  },
};
