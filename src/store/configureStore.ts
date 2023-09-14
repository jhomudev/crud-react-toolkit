import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './users'
import { persistanceLocalStorageMiddleware } from './middleware/persistenceLocaStorage'
import { messageForActionMiddleWare } from './middleware/messageToastAction'

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: [persistanceLocalStorageMiddleware, messageForActionMiddleWare]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
