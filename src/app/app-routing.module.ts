import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthGuard], data: { roles: ['user'] }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
