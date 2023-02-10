import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'reactstrap'
import HomePage from './components/HomePage'
import TopBar from './components/TopBar'
import VotePage from './components/VotePage'
import PollEditPage from './components/PollEditPage'
import PollCreatePage from './components/PollCreatePage'
import PollResultsPage from './components/PollResultsPage'

export default function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/polls/new" element={<PollCreatePage/>} />
          <Route path="/polls/:pollId" element={<PollResultsPage/>} />
          <Route path="/polls/:pollId/edit" element={<PollEditPage/>} />
          <Route path="/polls/:pollId/vote" element={<VotePage/>} />
        </Routes>
      </Container>
    </>
  )
}
