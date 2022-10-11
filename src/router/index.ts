import React from 'react';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  CONTACTS = '/',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, element: Login },
  { path: RouteNames.CONTACTS, exact: true, element: Contacts },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.CONTACTS, exact: true, element: Contacts },
];
