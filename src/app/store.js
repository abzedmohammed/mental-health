import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "../features/auth/authSlice"
import globalReducer from "../features/global/globalSlice"

// import Reducer from "../features"

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	auth: authReducer,
	global: globalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
