import axios from 'axios';

export const createMentor = (user) => {
  return {
    type: 'CREATE_MENTOR',
    user={
        "name",
        "title"
    }
  }
}
