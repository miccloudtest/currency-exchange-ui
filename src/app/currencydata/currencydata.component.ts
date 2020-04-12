import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../service/data/currency-service.service';

@Component({
  selector: 'app-currencydata',
  templateUrl: './currencydata.component.html',
  styleUrls: ['./currencydata.component.css']
})
export class CurrencydataComponent implements OnInit {

  currencyHistoricalData:Array<any>=[];
  constructor(private service:CurrencyServiceService) { }
 
  ngOnInit() {
    this.service.getHistoricalData().subscribe(
      response=>{
        return this.currencyHistoricalData=response;
      }
    )
  }

}
