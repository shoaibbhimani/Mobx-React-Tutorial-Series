import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';


import appState from './counterStore.js'

//component
import { observer, Provider, inject } from 'mobx-react';


//App Parent

const App = observer(() => (
   <Provider appState={appState}>
     <Counter />
   </Provider>
))

const Counter = inject("appState")(observer(({ appState }) => {
 return (
  <div>
  	<h2>{appState.getCount} </h2>
    <button onClick={appState.incCounter}>Inc Counter</button>

    <button onClick={appState.descCounter}>Dec Counter</button>		
  </div>
 )
}));

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
