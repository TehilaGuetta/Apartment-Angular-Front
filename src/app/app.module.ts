import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { PipePipe } from './pipe/pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DirDirective } from './directive/dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    LoginComponent,
    PipePipe,
    SignUpComponent,
    DirDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
