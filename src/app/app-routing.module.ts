import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { AppDesignComponent } from './page/app-design/app-design.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { GraphicDesignComponent } from './page/graphic-design/graphic-design.component';
import { HomeComponent } from './page/home/home.component';
import { LocationComponent } from './page/location/location.component';
import { WebDesignComponent } from './page/web-design/web-design.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'web-design', component: WebDesignComponent},
  {path: 'app-design', component: AppDesignComponent},
  {path: 'graphic-design', component: GraphicDesignComponent},
  {path: 'company', component: AboutUsComponent},
  {path: 'location', component: LocationComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
