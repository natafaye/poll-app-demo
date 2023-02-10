import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'
import { createPollByStringIdSelector } from '../app/pollSlice'
import { createResponse } from '../app/responseSlice'

export default function VotePage() {
  let { pollId } = useParams()
  const poll = useSelector(createPollByStringIdSelector(pollId))

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleResponseClick = (answer) => {
    const newResponseData = {
      pollId: parseInt(pollId),
      answer: answer
    }
    dispatch(createResponse(newResponseData))
    navigate("/polls/" + pollId)
  }

  return (
    <Row className="mt-3">
      <Col>
        <h2>{ poll.question }</h2>
        <div className="my-2">
          <Button color="primary" onClick={() => handleResponseClick(poll.answers[0])}>{ poll.answers[0] }</Button>
        </div>
        <div>
          <Button color="primary" onClick={() => handleResponseClick(poll.answers[1])}>{ poll.answers[1] }</Button>
        </div>
      </Col>
    </Row>
  )
}
