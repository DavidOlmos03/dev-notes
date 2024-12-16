import { Routes, Route } from 'react-router-dom';
import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';
// Routes for Home 
import Home from '../pages/Home.jsx';
import Welcome from '../views/Welcome.jsx';
import AngularView from '../views/AngularView.jsx';
import VueJsView from '../views/VueJsView.jsx';
import PhpView from '../views/PhpView.jsx';
import PythonView from '../views/PythonView.jsx';
import DockerView from '../views/DockerView.jsx';
import VenvView from '../views/VenvView.jsx';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='angular' element={<AngularView />} />
        <Route path='vuejs' element={<VueJsView />} />
        <Route path='php' element={<PhpView />} />
        <Route path='python' element={<PythonView />} />
        <Route path='docker' element={<DockerView />} />
        <Route path='venv' element={<VenvView />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRouter;
