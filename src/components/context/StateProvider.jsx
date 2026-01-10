// import { createContext, useContext, useReducer } from "react";

// export const StateContext = createContext();

// export const StateProvider = ({ reducer, initialState, children }) => {
//     const [state, dispatch]=useReducer(reducer, initialState);
//   return(
//     <StateContext.Provider value={{ state, dispatch }}>
//     {children}
//   </StateContext.Provider>
//   );
// };

// export const useStateValue = () => useContext(StateContext);
import React, { createContext, useContext, useReducer } from "react";

// Create context
export const StateContext = createContext();

// Provider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to use the state in components
export const useStateValue = () => useContext(StateContext);

