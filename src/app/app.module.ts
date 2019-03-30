import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { PlaneComponent } from './plane/plane.component';
import { AboutComponent } from './about/about.component';
import { RadioComponent } from './radio/radio.component';
import { Routes, RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'plane', component: PlaneComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    MusicComponent,
    PlaneComponent,
    AboutComponent,
    RadioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
