import axios from 'axios';

export const createPost = (text) => {
    //need to return another function
    return (dispatch) => {
      axios.post('http://localhost:3001/api/events/' , {text})
      .then( (response) => {
        console.log("Post created", response);
        return dispatch({
          type: "CREATE_POST",
          post: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }
}


export const fetchPosts = (text, history) => {
    //need to return another function
    return (dispatch) => {
      axios.get('/api/events/')
      .then( (response) => {

        console.log("Get Post", response);
        return dispatch({
          type: "FULFILL_GET_POSTS",
          posts: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
