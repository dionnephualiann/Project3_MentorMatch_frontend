import axios from 'axios';

// handling login only
export const logout = (history) => {
    //need to return another function
    return (dispatch) => {
      axios.get('http://localhost:3001/auth/logout/')
      .then( (response) => {
        console.log("Logout init", response);
        // it's a function that redirects to the profile page.
        // the response contains the .id. Using the .id, it's going to redirect to the
        // profile route.
        history.push("/login/")
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
