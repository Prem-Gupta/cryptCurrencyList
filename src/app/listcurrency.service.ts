import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ListcurrencyService {
  public Currency;
  public baseUrl = 'https://api.coinmarketcap.com/v2/';
  public graphUrl = 'https://graphs2.coinmarketcap.com/currencies/';
 
  constructor(private _http : HttpClient) { }

  public getAllCurrency() :any
  {
     let Currency = this._http.get(this.baseUrl +'ticker/');
    // console.log(Currency);
      return Currency;
  }

  public getAllGraphData(): any 
  {
    let priceTime = this._http.get(this.graphUrl);
   // console.log(priceTime);
    return priceTime;
  }
}
