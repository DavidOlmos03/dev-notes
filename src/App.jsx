// src/App.jsx

import React from 'react';
import AppRouter from './routes/AppRouter.jsx';
import AppMenu from './components/shared/Menu.jsx';
const App = () => {
  return (	
    <div>
      <AppRouter />
<AppMenu />	
    </div>
  );
};

export default App;

