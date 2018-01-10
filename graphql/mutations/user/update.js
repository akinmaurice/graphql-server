import {
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';

import { userType, userInputType } from '../../types';
import UserModel from '../../../models/User';

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID),
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType),
    },
  },
  resolve(root, params) {
    return UserModel.findByIdAndUpdate(params.id, { $set: { ...params.data } })
      .then(data => UserModel.findById(data.id).exec())
      .catch(err => new Error('Couldnt update User Data', err));
  },
};
