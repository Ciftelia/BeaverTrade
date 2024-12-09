import React from 'react';
import "./SearchResult.css"

export const SearchResult = ( { result }) => {
    const handleClick = () => {
        const input = document.querySelector('input');
        if (input) {
            input.value = result.name;
        }
    };

    return <div className={"search-result"} onClick={handleClick}>{result.name}</div>;
}