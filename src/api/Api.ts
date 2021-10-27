import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.coincap.io/',
})

//API
export const currencyAPI = {
  getCurrencyList() {
    const promise = instance.get<CurrencyListType>('v2/assets')
    return promise;
  },
  getCurrencyHistory(id: string) {
    const promise = instance.get(`/assets/${id}/history/interval=d1`);
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

export type CurrencyHistoryType = {
  priceUsd: string,
  time: number
  date: string
}

export type CurrencyHistoryListType = {
  data: CurrencyHistoryType[]
  timestamp: number
}

export type CurrencyListType = {
  data: CurrencyType[]
  timestamp: number
}

