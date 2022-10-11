import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

const AppRouter = () => {
  const isAuth = false;

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.CONTACTS} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRouter;
