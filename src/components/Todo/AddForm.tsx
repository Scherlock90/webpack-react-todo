import * as React from 'react';

interface PropsAddForm {
    onAdd: Function
}

const AddForm: React.FC<PropsAddForm> = props => {
    const [inputValue, setInputValue] = React.useState('');
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (inputValue) {
                props.onAdd(inputValue);
                setInputValue('');
            }
        }
    }
    return (
        <form>
            <input
                onKeyDown={handleKeyDown}
                onChange={(e: any) => setInputValue(e.currentTarget.value)}
                value={inputValue}
                className='todo-input'
                type='text'
                placeholder='Type a task and hit ENTER to add...'
            />
        </form>
    );
}

export default AddForm;