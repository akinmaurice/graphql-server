import {
  GraphQLNonNull,
} from 'graphql';

import { userType, userInputType } from '../../types';
import UserModel from '../../../models/User';

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType),
    },
  },
  resolve(root, params) {
    const user = new UserModel(params.data);
    const newUser = user.save();
    if (!newUser) {
      throw new Error('Error Adding New User');
    }
    return newUser;
  },
};
