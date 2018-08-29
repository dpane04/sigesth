import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./templates/home/home.component";
import { LoginComponent } from "./templates/login/login.component";
import { AuthGuard } from "./scripts/guards/auth.guard";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);