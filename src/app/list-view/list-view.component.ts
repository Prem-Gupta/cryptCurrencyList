import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ListcurrencyService } from '../listcurrency.service';
import { LOCAL_STORAGE } from 'angular-webstorage-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  providers: [Location]
})
export class ListViewComponent implements OnInit {
  public key: string;
  public reverse: boolean = false;
  public allCurrency = [];
  public arr = [];
  public arrCopy = [];
  public result = [];
  public Length: any;
  public selected: any;
  selectedIndex: number = null;
  public favData = [];
  public favourtiCoin = [];
  public selectedCoin = [];

  constructor(private _route: ActivatedRoute, private router: Router, public listService: ListcurrencyService) { }

  ngOnInit() {
    this.listService.getAllCurrency().subscribe(
      data => {
        this.allCurrency = data.data;
        // console.log(this.allCurrency);
        for (let element in this.allCurrency) {
          this.arr.push(this.allCurrency[element]);
        }
        this.arrCopy = this.arr;
      },
      error => {
        console.log(error);
      }
    )
  }

  public sort(key) {
    this.key = key;
    //  console.log(this.key);
    this.reverse = !this.reverse;

  }
  p: number = 1;

  public myOnFinish(event1, type) {
    // console.log(event1.from);
    // console.log(event1.to);

    let min = event1.from;
    let max = event1.to;

    if (type === 'marketCap') {
      if (this.result.length > 0) {
        this.result = this.result.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
      } else {
        this.result = this.arrCopy.filter(word => (word.quotes.USD.market_cap > min && word.quotes.USD.market_cap < max));
      }
    } else {
      if (this.result.length > 0) {
        this.result = this.result.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
      } else {
        this.result = this.arrCopy.filter(word => (word.quotes.USD.price > min && word.quotes.USD.price < max));
      }
    }

    this.arr = this.result;


  }

  onSelect(j) {
    // console.log(j);
    let key = 'id';
    this.favData.push(j);
    localStorage.setItem(key, JSON.stringify(this.favData));
    this.selected = (this.selected === j ? null : j);

  }
  isActive(j) {

    return this.selected === j;
  };


  chartPrice(name): void {

    this.router.navigate(['/pricechart',name.id]);
  }


  editCoin(name: any) {
   
  }
}
