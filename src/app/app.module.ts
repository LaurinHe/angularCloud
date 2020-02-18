import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MenuComponent } from './menu/menu.component';
import {
  _MatMenuDirectivesModule, MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule, MatCardModule, MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MAT_DATE_LOCALE
} from '@angular/material';
import { DatepickerComponent } from './selectors/datepicker/datepicker.component';
import { MatDatepickerModule} from '@angular/material';
import {StationService} from './station.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyChartComponent } from './my-chart/my-chart.component';

import { SelectorCountryComponent } from './selectors/selector-country/selector-country.component';
import { SelectorStationComponent } from './selectors/selector-station/selector-station.component';
import { SelectorDataComponent } from './selectors/selector-data/selector-data.component';
import { SendButtonComponent } from './send-button/send-button.component';
import { LoginFieldComponent } from './login-field/login-field.component';
import { MatRadioModule} from '@angular/material';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { VisualizationComponent } from './visualization/visualization.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DatepickerComponent,
    MyChartComponent,
    LoginComponent,
    SelectorCountryComponent,
    SelectorStationComponent,
    SelectorDataComponent,
    SendButtonComponent,
    LoginFieldComponent,
    LoginComponent,
    RegisterComponent,
    VisualizationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatInputModule,
        _MatMenuDirectivesModule,
        MatIconModule,
        MatMenuModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatListModule,
        MatDividerModule,
        MatGridListModule,
        MatTableModule,
        ReactiveFormsModule,
        ChartsModule,
        MatCardModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatButtonModule,
        MatToolbarModule,
        MatRadioModule,
        FormsModule
    ],
  providers: [httpInterceptorProviders, StationService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
