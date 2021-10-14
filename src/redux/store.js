import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

/* 
    O  middleware logger será útil para debuggar, 
    já que irá printar o que está acontecendo
*/

export const store = createStore(rootReducer, applyMiddleware(logger))

export default {store};