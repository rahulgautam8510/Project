const initialState = {
    posts: [],
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS': // Use underscores or camelCase
        return {
          ...state,
          posts: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  