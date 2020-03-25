const createStore = reducer => {
  let currentState = {}
  let observers = [] //观察者队列
  const getState = () => {
    return currentState
  }
  const dispatch = action => {
    currentState = reducer(currentState, action)
    observers.forEach(fn => fn())
  }
  const subscribe = fn => {
    observers.push(fn)
  }
  dispatch({ type: '@@REDUX_INIT' }) //初始化store数据
  return { getState, subscribe, dispatch }
}
export { createStore }