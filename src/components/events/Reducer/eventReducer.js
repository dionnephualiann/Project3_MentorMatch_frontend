const events = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_POST':
      return [
        ...state,
        {
          text: action.post.text,
          date: action.post.date,
        }
      ]

      break;
      case 'FULFILL_GET_POSTS':
        return [
          ...action.posts
        ]

        break;
    default:
      return state;

  }
}

export default events;
