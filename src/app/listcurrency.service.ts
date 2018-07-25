import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ListcurrencyService {
  public Currency;
  public baseUrl = 'https://api.coinmarketcap.com/v2/';
 
  constructor(private _http : HttpClient) { }

  public getAllCurrency() :any
  {
     let Currency = this._http.get(this.baseUrl +'ticker/');
    // console.log(Currency);
      return Currency;
  }
}
