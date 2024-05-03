import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

const STORAGE_KEY = 'marketValueDB'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(private http: HttpClient) {
    const marketValues = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    if (!marketValues || marketValues.length === 0) this._saveMarketValues()
  }

  // ! Need to define :Promise<?> (returned value)

  public getRate(coins: number) {
    return axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  }

  public async getMarketPrice() {
    const marketValues = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')

    if (marketValues && marketValues.length) {
      console.log('FROM CACHE')
      return Promise.resolve(marketValues)
    }

    const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=3months&format=json&cors=true')
    const { values } = res.data
    return values
  }

  public getConfirmedTransactions() { }

  // Cache mechanism
  private async _saveMarketValues() {
    const marketValues = await this.getMarketPrice()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(marketValues))
  }
}
