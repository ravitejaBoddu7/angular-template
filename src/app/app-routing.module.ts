import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  { path: 'dashboard', component: ProjectDashboardComponent },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
