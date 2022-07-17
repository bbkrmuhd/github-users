import React, { useState } from "react";


export default function SearchForm({ value, onSearch = f => f }){
    const [newValue, setValue] = useState(`${value}`)

    const submit = (e) => {
        e.preventDefault()
        onSearch(newValue)
    }
    return (
        <form onSubmit={submit}>
            <input type={"search"} value={newValue} onChange={event => setValue(event.target.value)} />
            <button>Search</button>
        </form>
    )
}