import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user-detail', component: UserDetailComponent}
];
