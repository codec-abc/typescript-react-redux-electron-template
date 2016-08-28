import * as Redux from 'redux'

// Reducer function. Given an actual state and an action it should compute the next state.
// The reducer function should be pure
export function counter(state : number = 0, action : Redux.Action) 
{
  switch (action.type) 
  {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
