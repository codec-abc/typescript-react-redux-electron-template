import * as Redux from 'redux'

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
