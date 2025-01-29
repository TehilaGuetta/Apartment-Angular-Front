import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



//מערך שבו נגדיר את הניתובים
const routes: Routes = [
  // {path:"myHome-שם שבחרתי",component:HomeComponentשם המחלקה של הקומפוננטה}
 {path:"homepage",component:HomePageComponent},
 {path:"login",component:LoginComponent},
 {path:"signup",component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
