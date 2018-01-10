import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';

import PostModel from '../../models/Post';
import { postType } from './post';

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User API',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(user) {
        const { _id } = user;
        return PostModel.find({ author: _id }).exec();
      },
    },
  }),
});

export const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Create New User',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});
