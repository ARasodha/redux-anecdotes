import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    createNotification(state, action) {
      return state = action.payload
    },

    removeNotification(state, action) {
      state = ''
      return state
    }
  }
})

export const { createNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
