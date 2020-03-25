import { createStore } from '../create-store'
import { reducer } from './reducer'
const store = createStore(reducer)
export default store
