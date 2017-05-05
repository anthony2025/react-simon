import React, {Component} from 'react'
import styles from './Simon.css';
import Rx from 'rxjs/Rx';

import Button from 'src/Button'

export default class Simon extends Component {
  state = {
    sequence: Array(10).fill()
  }

  // min <= Integer <= max
  spitRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  componentDidMount() {
    this.animate = [
      this.animateGreen = this.green.exposeAnimation(),
      this.animateRed = this.red.exposeAnimation(),
      this.animateYellow = this.yellow.exposeAnimation(),
      this.animateBlue = this.blue.exposeAnimation(),
    ]

    this.setState( ({sequence}) => {
      const array = sequence.map(() => this.spitRandomInteger(0, 3))
      const observable = Rx.Observable.interval(1000).take(array.length).map(i => array[i]);
      return {sequence: observable}
    })
  }

  componentDidUpdate() {
    console.log(this.state.sequence)
    this.subscribe()
  }


  subscribe = () => {
    this.subscription = this.state.sequence.subscribe(
      item => this.animate[item](),
      error => console.log('onError: ', error),
      () => console.log('onCompleted'))
  }

  componentWillUnmount() {
    this.subscription.dispose();
  }

  render () {
    return (
      <div className={styles.simon}>
        <Button id='green' ref={green => this.green = green} />
        <Button id='red' ref={red => this.red = red} />
        <Button id='blue' ref={blue => this.blue = blue} />
        <Button id='yellow' ref={yellow => this.yellow = yellow} />
      </div>
    )
  }
}
