import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { MyRequestsComponent } from './main-features/my-requests/my-requests.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { MyClassesComponent } from './main-features/my-classes/my-classes.component';
import { LeavesComponent } from './main-features/leaves/leaves.component';
import { LeaveDetailsComponent } from './main-features/leave-details/leave-details.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path: 'my-requests', component: MyRequestsComponent},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'my-classes', component: MyClassesComponent},
    {path: 'leaves', component: LeavesComponent},
    {path: 'leave-details', component: LeaveDetailsComponent}
];
