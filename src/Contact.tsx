import * as React from "react";

export default function Contact() {
    const [testNumber, setTestNumber] = React.useState(0);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        const newValue = e.target.value;
        const convertToNumber = Number(newValue);

        setTestNumber(convertToNumber);
     }
    return(
        <div>
            <h1>
                Contact Us!
            </h1>
            <div>
                { testNumber }
            </div>
            <input 
                type="number" 
                value={testNumber} 
                onChange={onChange} 
            />
        </div>
    )
}