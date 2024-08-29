import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './credenciais/login/login.component';

export const routes: Routes = [
    {path:"", component: LoginComponent, pathMatch:'full'},
    {path:"home", component: HomeComponent}
];
