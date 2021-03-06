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
let timeout;

export const setNotification = (message, seconds) => {
  return async dispatch => {
    if (timeout) clearTimeout(timeout)
    await dispatch(createNotification(message))
    timeout = setTimeout(() => dispatch(removeNotification()), seconds * 1000)
  }
}

export default notificationSlice.reducer
