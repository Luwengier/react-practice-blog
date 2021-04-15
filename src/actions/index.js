import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  const response = await jsonplaceholder.get('/post');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};