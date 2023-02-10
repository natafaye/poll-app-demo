import React from 'react'
import { Progress } from 'reactstrap'

export default function ResponseBar({ answer, allResponses }) {
    const numResponsesForAnswer = allResponses.filter(response => response.answer === answer).length
    const percentage = (numResponsesForAnswer / allResponses.length) * 100

    return (
        <div className="my-2">
            <span className="me-2">{answer}</span><Progress value={percentage} />
        </div>
    )
}
