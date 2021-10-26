import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.coincap.io/',
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
  timestamp: number
}

