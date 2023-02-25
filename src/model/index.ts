import { makeAutoObservable } from 'mobx'

const store = makeAutoObservable({
  count: 1,
  setCount: (count: number) => {
    store.count = count
  }
})

export default store
