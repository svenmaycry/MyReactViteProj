import { createStore } from 'redux'
import rootReducer from './rootReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }
