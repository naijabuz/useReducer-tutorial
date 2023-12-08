export const initialState = {
  loading: false,
  post: [],
  error: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "fetch-start":
      return {
        ...state,
        loading: true,
      };
    case "fetch-success":
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case "fetch-error":
      return {
        loading: false,
        error: true,
        post: [],
      };
    default:
      return state;
  }

  // if (action.type === 'fetch-start') {
  //     return {
  //         loading: true,
  //         error: false,
  //         post: [],
  //     }
  // } else if (action.type === 'fetch-success') {
  //     return {
  //         loading: false,
  //         error: false,
  //         post: action.payload,
  //     }
  // } else if (action.type === 'fetch-error') {
  //     return {
  //         loading: false,
  //         error: true,
  //         post: []
  //     }
  // }
};
