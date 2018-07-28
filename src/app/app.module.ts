import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { PriceChartComponent} from './price-chart/price-chart.component';
import { FavListComponent} from './fav-list/fav-list.component';
import { ListcurrencyService } from './listcurrency.service';
//import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { StorageServiceModule} from 'angular-webstorage-service';
import {RouterModule,Routes} from '@angular/router';
// import { ChartModule } from 'angular-highcharts';
import { DataTablesModule } from 'angular-datatables';
import { ComparisionChartComponent } from './comparision-chart/comparision-chart.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    PriceChartComponent,
    FavListComponent,
    ComparisionChartComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule,
    IonRangeSliderModule,
    AngularFontAwesomeModule,
    DataTablesModule,
    RouterModule.forRoot([
      
      {path :'priceChart/:id', component: PriceChartComponent},
      {path :'listView', component: ListViewComponent},
      {path :'comparisionView/:id1/:id2', component: ComparisionChartComponent},
      {path :'favView', component: FavListComponent},
      {path :'',pathMatch: 'full',  redirectTo:'favView'},
      {path:'**',component: NotFoundComponent}

    ])
  ],
  providers: [ListcurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
