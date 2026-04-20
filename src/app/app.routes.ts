import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Vivek — Software Engineer'
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent),
        title: 'Projects — Vivek'
      },
      {
        path: 'resume',
        loadComponent: () => import('./features/resume/resume.component').then(m => m.ResumeComponent),
        title: 'Resume — Vivek'
      },
      {
        path: '404',
        loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: '404 — Logic Error'
      },
    ]
  },
  { path: '**', redirectTo: '404' }
];
