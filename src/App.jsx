// src/App.jsx

import AppRouter from './routes/AppRouter.jsx';
import Menu from './components/shared/Menu.jsx';
import CheatSheet from './components/shared/CheatSheet.jsx';
import Footer from './components/shared/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css'

function App() {
  return (	
    <Router>
      <div>
      <Menu />	
      {/* Routes rendered here */}
      <AppRouter className="AppRouter"/>
      <CheatSheet />
      <Footer />
      </div>
    </Router>
  );
};

export default App;

