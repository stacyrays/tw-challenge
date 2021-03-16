import UserForm from './UserForm';
import { useReducer } from 'react';

import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext"

const initialState = {
  count: 0,
};
function reducer(state: { count: number; }, action: { type: any; }) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

const App = ( {initialCount = 0} ) => {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div>
          Count: {state.count}
          <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
          <button onClick={() => dispatch({ type: 'increment'})}>+</button>
          <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
          <h1>Challenge Form</h1>
          <UserForm />
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;