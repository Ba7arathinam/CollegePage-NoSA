import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegirstationComponent } from './regirstation/regirstation.component';
import { ApplicationTrackComponent } from './application-track/application-track.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { StaffEntryComponent } from './staff-entry/staff-entry.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { DepartmentTopperComponent } from './department-topper/department-topper.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgetComponent } from './forget/forget.component';
import { NavStaffComponent } from './nav-staff/nav-staff.component';
import { DataService } from './data.service';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    LogInComponent,
    AboutUsComponent,
    RegirstationComponent,
    ApplicationTrackComponent,
    MarkEntryComponent,
    StaffEntryComponent,
    StaffHomeComponent,
    GallaryComponent,
    DepartmentTopperComponent,
    ContactUsComponent,
    ForgetComponent,
    NavStaffComponent,
    DepartmentComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
