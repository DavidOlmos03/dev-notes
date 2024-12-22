import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loaded pages
const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Home = lazy(() => import('../pages/Home'));

// Lazy loaded views
const Welcome = lazy(() => import('../views/Welcome'));
const AngularView = lazy(() => import('../views/AngularView'));
const VueJsView = lazy(() => import('../views/VueJsView'));
const PhpView = lazy(() => import('../views/PhpView'));
const PythonView = lazy(() => import('../views/PythonView'));
const DockerView = lazy(() => import('../views/DockerView'));
const VenvView = lazy(() => import('../views/VenvView'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='angular' element={<AngularView />} />
        <Route path='vuejs' element={<VueJsView />} />
        <Route path='php' element={<PhpView />} />
        <Route path='python' element={<PythonView />} />
        <Route path='docker' element={<DockerView />} />
        <Route path='venv' element={<VenvView />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
