import { configureStore } from '@reduxjs/toolkit';
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contacts/contactSlice';
import { filtersReducer } from './contacts/filterSlice';
import { authReducer } from './authentification/authSlice';

// const persistConfig = {
//    key: 'contacts',
//    storage,
// };

const authPersistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

// const rootReducer = combineReducers({
// auth: authReducer,
// contacts: contactsReducer,
// filters: filtersReducer,
// });

// export const store = configureStore({ reducer: rootReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
      filters: filtersReducer,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export let persistor = persistStore(store);
