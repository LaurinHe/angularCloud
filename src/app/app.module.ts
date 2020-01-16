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
  MatTableModule
} from '@angular/material';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatDatepickerModule} from '@angular/material';
import {StationService} from './station.service';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyChartComponent } from './my-chart/my-chart.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DatepickerComponent,
    ListComponent,
    MyChartComponent,
    LoginComponent
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
    ChartsModule
  ],
  providers: [StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
