import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListcurrencyService } from '../listcurrency.service';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {
  public selectedCoin =[];
  public allCurrency = [];
  public arr = [];
  public arrCopy = [];
  chart = [];
  priceDate =[];
  date_1 = [];
  constructor(private _route: ActivatedRoute, private router: Router,public listService: ListcurrencyService) { }

  ngOnInit() {
    let myCoinId = this._route.snapshot.paramMap.get('id');
    this.listService.getAllCurrency().subscribe(
      data => {
        this.allCurrency = data.data;

        for (let element in this.allCurrency) {
          this.arr.push(this.allCurrency[element]);
        }
        this.arrCopy = this.arr;
        this.selectedCoin = this.arrCopy.filter(word => word.id == myCoinId);

        let date = new Date(this.selectedCoin[0].last_updated*1000);
        var hours = date.getHours();
       
       // console.log(price);
     
      for(let i=0;i<12;i++)
      {
        var priceChange = this.selectedCoin[0].quotes.USD.percent_change_1h; 
        var price = this.selectedCoin[0].quotes.USD.price; 
        if(priceChange <= 0)
        {
           price = price + price*(priceChange/100);
        }
        else{
          price = price - price*(priceChange/100);
        }
        this.priceDate.push({  
        "hourGraph" : hours,
        "priceGraph" : price
        });
        if(i === 12)
        {
          this.priceDate.shift();
        }
      
      }
   console.log(this.priceDate);
        this.chart = new Chart('canvas',{
          type: 'line',
          data: {
            labels: [this.priceDate[0].hourGraph],
            dataset : [{
              data: [this.priceDate[0].priceGraph]
            }]
          },
          options : {
            legend : {
              display: false
            },
            scales : {
              xAxes : [{
                display: true
              }],
              yAxes : [{
                display: true
              }]
            }
          }
        })
      
    },
      error => {
        console.log(error);
      }
    
    )
  
   }

  

   

  
 
}
