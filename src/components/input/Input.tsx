import * as React from "react";

export default function Input() {
    const [testNumber, setTestNumber] = React.useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const newValue = e.target.value;
        const convertToNumber = Number(newValue);

        setTestNumber(convertToNumber);
    }

    return(
        <div>
            <h1> Input of value </h1>
            <div>{ testNumber }</div>
            <input
                type="number"
                value={testNumber}
                onChange={onChange}
            />
        </div>
    )
}