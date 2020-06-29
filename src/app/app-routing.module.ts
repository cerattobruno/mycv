import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { EducationComponent } from './components/pages/education/education.component';
import { ContactComponent } from './components/pages/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'skill', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', scrollOffset: [0, 100]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
