import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

export const commentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    article: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    comment: {
      type: GraphQLString,
    },
  }),
});


export const commentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  description: 'Create New Comment',
  fields: () => ({
    article: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    comment: {
      type: GraphQLString,
    },
  }),
});
