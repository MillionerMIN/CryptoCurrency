import axios from "axios";

const instance = axios.create({
  baseURL: 'http://api.coincap.io/',

  headers: {
    'API-KEY': 'faeeaf7f-6f82-49c9-a88b-32cffe70c772'
  }
})

//API
export const currencyAPI = {
  getCurrencyList() {
    const promise = instance.get<CurrencyListType>('v2/assets')
    return promise;
  }
}

//Type
export type CurrencyType = {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export type CurrencyListType = {
  data: CurrencyType[]
}

