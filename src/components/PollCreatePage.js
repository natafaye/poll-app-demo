import React from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row } from 'reactstrap'
import { createPoll } from '../app/pollSlice'
import PollForm from './PollForm'

export default function PollCreatePage() {
  const dispatch = useDispatch()
  const onSubmit = (newPollData) => dispatch(createPoll(newPollData))
  
  return (
    <Row>
        <Col>
            <h2 className="my-3">New Poll</h2>
            <PollForm onSubmit={onSubmit} initialValues={{ question: "", answer1: "", answer2: "" }} buttonLabel="Create"/>
        </Col>
    </Row>
  )
}
