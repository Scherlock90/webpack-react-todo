import * as React from 'react';

interface IProps {
    onAdd: (inputValue: string) => void
}

export const AddForm: React.FC<IProps> = ({ onAdd }) => {
    const [inputValue, setInputValue] = React.useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (inputValue) {
                onAdd(inputValue);
                setInputValue('');
            }
        }
    }

    return (
        <form>
            <input
                onKeyDown={handleKeyDown}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}
                value={inputValue}
                className='todo-input'
                type='text'
                placeholder='Type a task and hit ENTER to add...'
            />
        </form>
    );
}
