import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'
import PollCard from './PollCard'

export default function HomePage() {
    const pollList = useSelector(state => state.polls.pollList)

    const navigate = useNavigate()
    
    return (
        <>
            <Row className="my-3">
                <Col>
                    <Button color="success" onClick={() => navigate("/polls/new")}>New Poll</Button>
                </Col>
            </Row>
            <Row>
                {pollList.map(poll => (
                    <Col xs={4} key={poll.id}>
                        <PollCard poll={poll} showButtons={true} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
