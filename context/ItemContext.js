/* TODO: Create the ItemContext and useItems() function */
import { createContext, useContext } from 'react';

/* Creates the actual Context objects */
export const ItemContext = createContext({
    items: {}, // data object stored
    setItems: () => {} // updater function so child components can modify
  });
  
/* 
* Utility function for whenever you want to 
* consume the context data or setter function
*/
export function useItems() {
    return useContext(ItemContext);
  }