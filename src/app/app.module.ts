import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DogComponent } from './component/dog/dog.component';
import { MindComponent } from './component/mind/mind.component';
import { FooterComponent } from './component/footer/footer.component';
import { ConclusionComponent } from './component/conclusion/conclusion.component';
import { ByeComponent } from './component/bye/bye.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogComponent,
    MindComponent,
    FooterComponent,
    ConclusionComponent,
    ByeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
