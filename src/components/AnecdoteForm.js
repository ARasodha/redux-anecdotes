import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer.js'
import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteName.value
    event.target.anecdoteName.value = ''
    dispatch(createAnecdote(content))
    dispatch(createNotification(`you created '${content}'`))
    setTimeout(() => dispatch(removeNotification()), 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdoteName' /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm