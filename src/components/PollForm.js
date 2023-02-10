import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label } from 'reactstrap'

// TODO: Allow more than 2 answer options

export default function PollForm({ onSubmit, initialValues, editId, buttonLabel }) {
  const [questionValue, setQuestionValue] = useState(initialValues.question)
  const [answer1Value, setAnswer1Value] = useState(initialValues.answer1)
  const [answer2Value, setAnswer2Value] = useState(initialValues.answer2)

  const navigate = useNavigate()

  const handleSubmit = () => {
    const newPollData = {
      id: editId,
      question: questionValue,
      answers: [answer1Value, answer2Value]
    }
    onSubmit(newPollData)
    navigate("/")
  }

  return (
    <form>
      <FormGroup>
        <Label for="question-input">Question</Label>
        <Input id="question-input" value={questionValue} onChange={ (event) => setQuestionValue(event.target.value) }/>
      </FormGroup>
      <FormGroup>
        <Label>Answers</Label>
        <Input className="mb-2" value={answer1Value} onChange={ (event) => setAnswer1Value(event.target.value) }/>
        <Input value={answer2Value} onChange={ (event) => setAnswer2Value(event.target.value) }/>
      </FormGroup>
      <Button color="success" onClick={handleSubmit}>{ buttonLabel }</Button>
    </form>
  )
}
