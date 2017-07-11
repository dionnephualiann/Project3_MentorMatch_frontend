const profile = (state={}, action) => {
  switch (action.type) {
    case 'FULFILL_CREATE_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
      break;
      default:
        return state;


      }
    }

export default profile;
