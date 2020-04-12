import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {

  constructor(private http:HttpClient) { }

  getHistoricalData(){
    return this.http.get<Array<any>>('http://localhost:9999/currency/gethistoricaldata');
    console.log("callllll");
  }
}
