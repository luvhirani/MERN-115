import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './slices/Counterslice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})