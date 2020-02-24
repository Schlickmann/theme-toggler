import React, {createContext, useReducer} from 'react';

const initialState = {
  theme: 'light'
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'ON_THEME_CHANGE':
        return { ...state,...action.payload };
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }