const isAuthenticated = (state = {isAuthenticated: false}, action) => {
  switch (action.type) {
    case 'AUTHENTICATED_STATE':
      return {
        ...state,
        isAuthenticated : action.isAuthenticated
      }
      break;

      default:
        return state;

      }
    }

  export default isAuthenticated;
