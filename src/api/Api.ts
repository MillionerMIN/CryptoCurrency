import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.coincap.io/',
})

//API
export const currencyAPI = {
  getCurrencyList(offset: number, perPage: number) {
    const promise = instance.get<CurrencyListType>(`v2/assets?offset=${offset}&limit=${perPage}`)
    return promise;
  },
  getCurrentCurrency(id: string) {
    return instance.get<CurrencyType>(`v2/assets/${id}`)
  },
  getCurrencyHistory(id: string) {
    const promise = instance.get<CurrencyHistoryListType>(`v2/assets/${id}/history?interval=d1`);
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

