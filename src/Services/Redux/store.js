import { createStore, combineReducers } from 'redux';

// Define your initial state
const initialFormState = {
  form: {},
};

const initialColorState = {
  color: '',
  id: null,
};

// Define your form reducer
const formReducer = (state = initialFormState, action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

// Define your color reducer
const colorReducer = (state = initialColorState, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        color: action.payload.color,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

// Combine your reducers
const rootReducer = combineReducers({
  form: formReducer,
  color: colorReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;