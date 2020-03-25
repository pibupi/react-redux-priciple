const createStore = reducer => {
  let initState = {}
  let observers = []
  const getState = () => {
    return initState
  }
  const dispatch = action => {
    initState = reducer(initState, action)
    observers.forEach(fn => fn())
  }
  const subscribe = fn => {
    observers.push(fn)
  }
  dispatch({ type: '@REDUX_INIT' })
  return { getState, dispatch, subscribe }
}
export { createStore }
