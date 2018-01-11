import userMutation from './user';
import postMutation from './post';
import commentMutation from './comment';

export default {
  ...userMutation,
  ...postMutation,
  ...commentMutation,
};

