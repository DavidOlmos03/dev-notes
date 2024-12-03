// src/App.jsx

import AppRouter from './routes/AppRouter.jsx';
import Menu from './components/shared/Menu.jsx';
import Welcome from './components/shared/Welcome.jsx';
import CheatSheet from './components/shared/CheatSheet.jsx';
import Footer from './components/shared/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (	
    <Router>
      <div>
      <Menu />	
      <Welcome />
      {/* Routes rendered here */}
      <AppRouter />

      <CheatSheet />
      <Footer />
      </div>
    </Router>
  );
};

export default App;

