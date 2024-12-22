// src/App.jsx

import AppRouter from './routes/AppRouter.jsx';
import Menu from './components/shared/Menu.jsx';
import CheatSheet from './components/shared/CheatSheet.jsx';
import Footer from './components/shared/Footer.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
{/*import './styles/App.css'*/}

function App() {
  return (	
    <Router>
      <div className="App">
      <Menu />	
      {/* Routes rendered here */}
      <div className="shadow-lg m-md-5 p-md-5 m-2 p-2 rounded-3">
        <AppRouter />
      </div>
      <CheatSheet />
      <Footer />
      </div>
    </Router>
  );
};

export default App;

