import { createStore, compose, combineReducers } from 'redux';
import EventReducer from './components/events/Reducer/eventReducer';


export let initStore = () => {

  const reducer = combineReducers ({
    events: EventReducer
  });

  const store = createStore( reducer, {events: []}, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));


return store;
}

export default initStore;
