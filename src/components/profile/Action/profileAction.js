import axios from 'axios';
import * as AuthAction from '../../auth/Action/authAction'

export const fetchProfile = (id) => {
    //need to return another function
    return (dispatch) => {
      axios.get('/api/profile/' + id)
      .then( (response) => {
        console.log("Get Profile", response);

        dispatch (AuthAction.login());
        return dispatch({
          type: "FULFILL_GET_PROFILE",
          profile: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }
}
