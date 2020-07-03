import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/pages/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { EducationComponent } from './components/pages/education/education.component';
import { ContactComponent } from './components/pages/contact/contact.component';

// Conexion a firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule} from '@angular/fire/database'
// import { environment } from '../../src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
