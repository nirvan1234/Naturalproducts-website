import React,{createContext , useContext, useReducer} from 'react'


//preparing the datalayers
export const StateContext = createContext();
//wrapout components, provide the provider
export const StateProvider =  ({reducer, intialState , children}) => (
  <StateContext.Provider value ={useReducer(reducer ,intialState)} > 
       {children}
  </StateContext.Provider>

);

// 
export const useStateValue = () => useContext(StateContext)