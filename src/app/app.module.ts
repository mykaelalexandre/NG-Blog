import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/BlogModule';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule, MatToolbar, MatToolbarModule, MatIcon, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    BlogModule,
    RouterModule.forRoot([]),
  ],
  exports:[
    MatCardModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
