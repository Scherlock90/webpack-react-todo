import * as React from "react"

export default function Input() {
    const [numberFromInput, setNewNumber] = React.useState(0)
    const [validation, setValidation] = React.useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        if(numberFromInput >= 10) {
            setValidation(true)
            setNewNumber(numberFromInput - 1)
        } else {
            setNewNumber(+(e.target.value))
            setValidation(false)
        }
    }

    return (
        <>
            <h1> Input of value </h1>
            <div>{numberFromInput }</div>
            <input
                type="number"
                value={numberFromInput}
                onChange={onChange}
            />
            <div>{ validation && 'You have 10, and stop count number' }</div>
        </>
    )
}