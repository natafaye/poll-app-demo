import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import { createPollByStringIdSelector, updatePoll } from '../app/pollSlice'
import PollForm from './PollForm'

export default function PollEditPage() {
    let { pollId } = useParams()
    const poll = useSelector(createPollByStringIdSelector(pollId))

    const dispatch = useDispatch()
    const onSubmit = (updatedPollData) => dispatch(updatePoll(updatedPollData))

    return (
        <Row>
            <Col>
                <h2 className="my-3">Edit Poll</h2>
                <PollForm 
                    onSubmit={onSubmit} 
                    editId={parseInt(pollId)} 
                    initialValues={{ question: poll.question, answer1: poll.answers[0], answer2: poll.answers[1] }}
                    buttonLabel="Save" 
                />
            </Col>
        </Row>
    )
}
