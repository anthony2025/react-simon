import Rx from 'rxjs'

const getNewObservable = (source, take, speed) =>
  Rx.Observable
    .interval(speed)
    .take(take)
    .map(i => source[i])

export default getNewObservable
