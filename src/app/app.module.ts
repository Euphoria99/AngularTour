import { ProfileModule } from './profile/profile.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomersComponent } from './customers/add-customers/add-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HomeComponent,
    CustomersComponent,
    AddCustomersComponent,
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
