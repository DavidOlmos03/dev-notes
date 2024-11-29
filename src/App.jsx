// src/App.jsx

import AppRouter from './routes/AppRouter.jsx';
import Menu from './components/shared/Menu.jsx';
import Welcome from './components/shared/Welcome.jsx';
import CheatSheet from './components/shared/CheatSheet.jsx';
import Footer from './components/shared/Footer.jsx';


function App() {
  return (	
    <div>
      <Menu />	
      <Welcome />
      <AppRouter />
      <CheatSheet />
      <Footer />
    </div>
  );
};

export default App;

