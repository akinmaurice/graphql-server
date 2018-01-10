import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} from 'graphql';

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
  }),
});


export const postInputType = new GraphQLInputObjectType({
  name: 'Post Input Type',
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
