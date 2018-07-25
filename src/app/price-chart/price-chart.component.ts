import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListcurrencyService } from '../listcurrency.service';
import { Chart } from 'chart.js';
// import {Observable} from 'rxjs';



@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  public selectedCoin = [];
  public allCurrency = [];
  public arr = [];
  public arrCopy = [];
  chart = [];
  timelines = [];
  date_1 = [];
  public TIME_INTERVAL = 3600 * 1000;
  public TIMELINE_LENGTH = 12;
  constructor(private _route: ActivatedRoute, private router: Router, public listService: ListcurrencyService) { }

  ngOnInit() {
    this._init();
  }

  _init()
  {
    setInterval(() => {
      let myCoinId = this._route.snapshot.paramMap.get('id');
      this.listService.getAllCurrency().subscribe(
        data => {
          this.allCurrency = data.data;
  
          for (let element in this.allCurrency) {
            this.arr.push(this.allCurrency[element]);
          }
          this.arrCopy = this.arr;
          this.selectedCoin = this.arrCopy.filter(word => word.id == myCoinId);
          let date = new Date(this.selectedCoin[0].last_updated * 1000);
            var hours = date.getHours();
  
            var priceChange = this.selectedCoin[0].quotes.USD.percent_change_1h;
            var price = this.selectedCoin[0].quotes.USD.price;
            if (priceChange <= 0) {
              price = price + price * (priceChange / 100);
            }
            else {
              price = price - price * (priceChange / 100);
            }
            this.timelines.push({
              "hourGraph": hours,
              "priceGraph": price
            });
            if (this.timelines.length === this.TIMELINE_LENGTH) {
              this.timelines.shift();
            }
          }, this.TIME_INTERVAL);
        },
  
        error => {
          console.log(error);
        }
  
      )

  // console.log(this.timelines);
  }





}
