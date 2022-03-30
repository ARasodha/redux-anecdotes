import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer.js'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteName.value
    event.target.anecdoteName.value = ''

    props.createAnecdote(content)
    props.setNotification(`you created '${content}'`, 5)
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification
}

const ConnectedForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedForm