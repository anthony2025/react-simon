export const get = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    console.log('getting state from local storage')
    return JSON.parse(serializedState)
  } catch (err) {
    console.error(err)
    return undefined
  }
}

export const post = state => {
  try {
    const serializedState = JSON.stringify(state)
    console.log('saving state to local storage')
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.error(err)
  }
}
