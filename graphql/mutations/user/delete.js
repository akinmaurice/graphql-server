import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import { userType } from '../../types';
import UserModel from '../../../models/User';

export default {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params) {
    const removedUser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removedUser) {
      throw new Error('User Could not Be Removed');
    }
    return removedUser;
  },
};
