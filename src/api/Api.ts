import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.coincap.io/v2/',
})

//API
export const currencyAPI = {
  getStillCurrencyList() {
    return instance.get<CurrencyListType>(`assets`)
  },
  getCurrencyList(offset: number, perPage: number) {
    const promise = instance.get<CurrencyListType>(`assets?offset=${offset}&limit=${perPage}`)
    return promise;
  },
  getCurrentCurrency(id: string) {
    return instance.get<CurrentCurrencyType>(`assets/${id}`)
  },
  getTopCurrency(perPage: number) {
    return instance.get<CurrencyListType>(`assets?limit=${perPage}`)
  },
  getCurrencyHistory(id: string) {
    const promise = instance.get<CurrencyHistoryListType>(`assets/${id}/history?interval=d1`);
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
export type CurrentCurrencyType = {
  data: CurrencyType
  timestamp: number
}

export type CurrencyListType = {
  data: CurrencyType[]
  timestamp: number
}

