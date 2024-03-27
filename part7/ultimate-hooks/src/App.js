import React from 'react'
import { useField, useResource } from './hooks'

const App = () => {
  const noteContent = useField('text')
  const personName = useField('text')
  const personNumber = useField('text')

  const [notes, noteService] = useResource('http://localhost:3005/notes')
  const [persons, personService] = useResource('http://localhost:3005/persons')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: noteContent.value })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: personName.value, number: personNumber.value})
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...noteContent} />
        <button>create</button>
      </form>
      {notes.map(n => <p key={n.id}>{n.content}</p>)}

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...personName} /> <br/>
        number <input {...personNumber} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
    </div>
  )
}

export default App
