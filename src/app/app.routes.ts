import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell.component').then(m => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Home — Dev Portfolio'
      },
      {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent),
        title: 'Projects — Dev Portfolio'
      },
      {
        path: 'resume',
        loadComponent: () => import('./features/resume/resume.component').then(m => m.ResumeComponent),
        title: 'Resume — Dev Portfolio'
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
