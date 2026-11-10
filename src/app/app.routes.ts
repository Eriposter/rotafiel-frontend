import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.Sobre),
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/servicos/servicos').then((m) => m.Servicos),
  },
  {
    path: 'setores',
    loadComponent: () => import('./pages/setores/setores').then((m) => m.Setores),
  },
  {
    path: 'contactos',
    loadComponent: () => import('./pages/contactos/contactos').then((m) => m.Contactos),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
