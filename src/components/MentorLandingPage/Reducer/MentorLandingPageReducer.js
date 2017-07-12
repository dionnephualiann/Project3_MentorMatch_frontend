const carsReducer = (state = [], action) => {

  console.log(action);

  switch (action.type) {
    case "CREATE_MENTOR":
      break;
    default:
        return state;
  }
}


export default carsReducer;
