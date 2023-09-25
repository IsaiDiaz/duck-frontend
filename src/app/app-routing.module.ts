import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './guard/auth-guard.guard';
import { RandomDuckComponent } from './components/random-duck/random-duck.component';
import { ReducedRandomDuckComponent } from './components/reduced-random-duck/reduced-random-duck.component';

const routes: Routes = [
  {path: 'allDucks', component: MainComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
  {path: 'randomDuck', component: RandomDuckComponent, canActivate: [AuthGuard], data: { roles: ['user'] }},
  {path: '', component: ReducedRandomDuckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
