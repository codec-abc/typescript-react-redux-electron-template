import * as React from "react";

import * as CounterComponent from "./components/counter";
import * as CounterReducer from "./reducers/counter"

import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(CounterReducer.counter);
const rootEl = document.getElementById("root");

function render()
{
  ReactDOM.render(
  <Provider store={store}>
     <CounterComponent.Counter 
        compiler="TypeScript" 
        framework="React"
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })} 
      />
  </Provider>,
  rootEl
  )
}

render();
store.subscribe(render);