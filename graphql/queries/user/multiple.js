import {
  GraphQLList,
} from 'graphql';

import { userType } from '../../types';
import UserModel from '../../../models/User';

export default {
  type: new GraphQLList(userType),
  resolve() {
    const users = UserModel.find().exec();
    if (!users) {
      throw new Error('Error Fetching Users');
    }
    return users;
  },
};
