import Rx from 'rxjs/Rx'
// TODO treeshaking

export default (source, take, speed) =>
  Rx.Observable.interval(speed).take(take).map(i => source[i])
