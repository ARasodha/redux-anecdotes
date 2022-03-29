import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import Notification from './Notification'
import Filter from './Filter'
import { setNotification } from '../reducers/notificationReducer'
import { updateAnecdote } from '../reducers/anecdoteReducer'


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
            <button onClick={async () => { 
              dispatch(vote(anecdote.id))
              dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
              dispatch(updateAnecdote(anecdote.id))
              }}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList