import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const App = () => {
  const [note, setNote] = useState(null)
  const [entries, setEntries] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNewEntry = (entry) => {
    entry.id = (Math.random() * 10000).toFixed(0)
    setEntries(entries.concat(entry))
    setNote(`${entry.content} created successfully !`)
    setTimeout(() => {
      setNote(null)
    }, 10000)
  }

  const match = useRouteMatch('/entries/:id')
  const entry = match
    ? entries.find((entry) => entry.id === Number(match.params.id))
    : null

  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/entries/:id">
          <Anecdote entry={entry} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/create_new">
          <CreateNew addNew={addNewEntry} />
        </Route>
        <Route path="/">
          <Notification note={note} />
          <AnecdoteList entries={entries} />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
