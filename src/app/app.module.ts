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
    MatTableModule, MatCardModule, MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatToolbarModule
} from '@angular/material';
import { DatepickerComponent } from './selectors/datepicker/datepicker.component';
import { MatDatepickerModule} from '@angular/material';
import {StationService} from './station.service';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyChartComponent } from './my-chart/my-chart.component';
import { LoginComponent } from './login/login.component';
import { SelectorCountryComponent } from './selectors/selector-country/selector-country.component';
import { SelectorStationComponent } from './selectors/selector-station/selector-station.component';
import { SelectorDataComponent } from './selectors/selector-data/selector-data.component';
import { SendButtonComponent } from './send-button/send-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DatepickerComponent,
    ListComponent,
    MyChartComponent,
    LoginComponent,
    SelectorCountryComponent,
    SelectorStationComponent,
    SelectorDataComponent,
    SendButtonComponent
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
        MatToolbarModule
    ],
  providers: [StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
