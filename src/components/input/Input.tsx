import React, { useEffect, useState } from "react";

export default function Input() {
  const [numberFromInput, setNewNumber] = useState(0);
  const [mergeNumbers, setMergeNumbers] = useState([]);
  const [isValidation, setIsValidation] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const firstArrToMerge = [11, 22, 33, 44, 55];
  const secondArrToMerge = [1, 2, 3];

  const onChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (numberFromInput >= 10) {
      setIsValidation(true);
      setNewNumber(numberFromInput - 1);
    } else {
      setNewNumber(+value);
      setIsValidation(false);
    }
  };

  const mergeArray = () =>
    setMergeNumbers([...secondArrToMerge, numberFromInput, ...firstArrToMerge]);

  const checkedCheckbox = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);

  useEffect(() => {
    mergeArray();
    return () => mergeArray();
  }, [numberFromInput]);

  return (
    <>
      <h1> Input of value </h1>
      <div className={"input-div"}>
        {" "}
        First arr ready to merge with value input: [{`${firstArrToMerge}`}]{" "}
      </div>
      <div className={"input-div"}>
        {" "}
        Second arr ready to merge with value input: [{`${secondArrToMerge}`}]{" "}
      </div>
      <div className={"input-div"}>
        {isChecked ? `${mergeNumbers}` : numberFromInput}
      </div>
      <input type={"number"} value={numberFromInput} onChange={onChange} />
      <input
        type={"checkbox"}
        name={"merge"}
        id={"merge"}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          checkedCheckbox(e)
        }
      />
      <label htmlFor={"merge"}>Merge</label>
      <div>{isValidation && "You have 10, and stop count number"}</div>
    </>
  );
}
