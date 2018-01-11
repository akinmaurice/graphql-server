import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} from 'graphql';


import CommentModel from '../../models/Comment';
import { commentType } from './comment';

export const postType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    author: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    comments: {
      type: new GraphQLList(commentType),
      resolve(post) {
        const { _id } = post;
        return CommentModel.find({ article: _id }).exec();
      },
    },
  }),
});


export const postInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  description: 'Create New Post',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  }),
});
