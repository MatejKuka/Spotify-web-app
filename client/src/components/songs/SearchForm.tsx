import React, {useRef} from 'react';

const SearchForm: React.FC<{ onAddedInput: (text: String) => void }> = (props) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    function clickFormHandler(event: React.FormEvent) {
        event.preventDefault();
        const refValue = searchInputRef.current?.value;
        if (refValue) {
            console.log(refValue);
            props.onAddedInput(refValue);
        }
    }

    return (
        <form onSubmit={clickFormHandler}>
            <input ref={searchInputRef} type="text"/>
            <button>Search</button>
        </form>
    );
}

export default SearchForm;
