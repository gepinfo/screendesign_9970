import Admin from './app/admin/admin';
import  Login  from './app/login/login';
import  Sefscreen  from './app/sefscreen/sefscreen';
import  Signup  from './app/signup/signup';
import  Home  from './app/home/home';
import  Authorization  from './app/authorization/authorization';
import  Updateauthorization  from './app/authorization/updateauthorization/updateauthorization';
import  Manageroles  from './app/manageroles/manageroles';
import  Manageusers  from './app/manageusers/manageusers';
import  Managecontrol  from './app/managecontrol/managecontrol';
import  User  from './app/user/user';
import  ProfilesettingsComponent  from './app/user/profilesettings/profilesettings';
import { lazy } from 'react';
import Template from "./app/template/template";

let routes: any = [
  { path: '/admin', component: Admin },,
  { path: '/login', component: Login },
{ path: '/sefscreen', component: Sefscreen },
{ path: '/signup', component: Signup },
{ path: '/home', component: Home },
{ path: '/authorization', component: Authorization },
{ path: '/updateauthorization', component: Updateauthorization },
{ path: '/manageroles', component: Manageroles },
{ path: '/manageusers', component: Manageusers },
{ path: '/managecontrol', component: Managecontrol },
{ path: '/usermanagement', component: User },
{ path: '/profile', component: ProfilesettingsComponent },
{ path : '/signupscreen', component: lazy(()=>import('./app/signupscreen/signupscreen')) },
{ path : '/dashboardscreen', component: lazy(()=>import('./app/dashboardscreen/dashboardscreen')) },
{ path : '/reportscreen', component: lazy(()=>import('./app/reportscreen/reportscreen')) },
{ path : '/updatescreenaccount', component: lazy(()=>import('./app/updatescreenaccount/updatescreenaccount')) },
{ path : '/crentryscreen', component: lazy(()=>import('./app/crentryscreen/crentryscreen')) },
{ path : '/generallegscreen', component: lazy(()=>import('./app/generallegscreen/generallegscreen')) },
{ path: "", component: Template }

];

export let userRoutes: any;
if (sessionStorage.getItem("screens")) {
 
 userRoutes = JSON.parse(sessionStorage.getItem("screens") || " ");
} else {
  userRoutes = [];
}

export default  routes;
