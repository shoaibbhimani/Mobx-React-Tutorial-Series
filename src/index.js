import React from 'react';
import ReactDOM from 'react-dom';
//component
import { observer, Provider, inject } from 'mobx-react';
import Todos from './Todos.js'

import todoStore from './todoStore.js'

//App Parent
const App = observer(() => (
   <Provider todoStore={todoStore}>
     <Todos />
   </Provider>
))



ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
