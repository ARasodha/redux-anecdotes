import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import Notification from './Notification'
import Filter from './Filter'

import { createNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const filterText = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = filterText === '' 
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().startsWith(filterText))


  const dispatch = useDispatch()

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => { 
              dispatch(vote(anecdote.id))
              dispatch(createNotification(`you voted '${anecdote.content}'`))
              setTimeout(() => dispatch(removeNotification()), 5000)
              }}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList