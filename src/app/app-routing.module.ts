import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent  
  },
  {
    path: 'register', component: RegisterComponent  
  },
  {
    path: 'recovery', component: RecoveryComponent  
  },
  {
    path: 'destinations', component: DestinationsComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
