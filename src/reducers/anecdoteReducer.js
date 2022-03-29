import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      state = current(state)
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
    
      const newAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anecdote => anecdote.id === id ? newAnecdote : anecdote)
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      state = current(state)
      return state = action.payload
    },
    replaceAnecdote(state, action) {
      const newAnecdote = action.payload
      const idx = state.findIndex(a => a.id === newAnecdote.id)
      state[idx] = newAnecdote
    }
  }
})

export const { vote, appendAnecdote, setAnecdotes, replaceAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateAnecdote = id => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.updateVotes(id)
    dispatch(replaceAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer