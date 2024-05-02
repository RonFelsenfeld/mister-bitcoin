import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) { }

  public getRate(coins: number) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  }
}
