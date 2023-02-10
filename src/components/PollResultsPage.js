import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { createPollByStringIdSelector } from '../app/pollSlice'
import PollCard from './PollCard'

export default function PollResultsPage() {
    let { pollId } = useParams()
    const poll = useSelector(createPollByStringIdSelector(pollId))
    
    return (
        <div className="mt-3">
            <PollCard poll={poll} showButtons={false}/>
        </div>
    )
}
