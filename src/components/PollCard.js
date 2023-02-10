import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { deletePoll } from '../app/pollSlice'
import ResponseBar from './ResponseBar'

export default function PollCard({ poll, showButtons }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pollResponses = useSelector(state => state.responses.responseList.filter(response => response.pollId === poll.id))

  return (
    <div className="border rounded p-2 mb-3 me-3">
        <h4>{poll.question}</h4>
        <ResponseBar answer={poll.answers[0]} allResponses={pollResponses}/>
        <ResponseBar answer={poll.answers[1]} allResponses={pollResponses}/>
        { showButtons && (
          <div>
            <Button color="danger" onClick={() => dispatch(deletePoll(poll.id))}>Delete</Button>
            <Button color="info" className="ms-2" onClick={() => navigate("/polls/" + poll.id + "/edit")}>Edit</Button>
            <Button color="primary" className="ms-2" onClick={() => navigate("/polls/" + poll.id + "/vote")}>Vote</Button>
          </div>
        )}
    </div>
  )
}
