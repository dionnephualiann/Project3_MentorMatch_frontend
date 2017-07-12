// No need for reducer since it's redirecting you to a page.
import axios from 'axios';

// handling login only
export const login = (credentials, history) => {
    //need to return another function
    return (dispatch) => {
      axios.post('http://localhost:3001/auth/login/' , credentials)
      .then( (response) => {
        console.log("Login init", response);
        // it's a function that redirects to the profile page.
        // the response contains the .id. Using the .id, it's going to redirect to the
        // profile route.
        history.push("/events/")
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
