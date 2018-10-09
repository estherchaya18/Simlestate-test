import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
    { path: 'page/dashboard', component: HomeComponent, canActivate: [AuthGuard],pathMatch:'full' },
    { path: 'auth/login', component: LoginComponent ,pathMatch:'full'},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);