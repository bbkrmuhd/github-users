import React, { useState } from "react";


export default function SearchForm({ value, onSearch = f => f }){
    const [newValue, setValue] = useState(`${value}`)

    const submit = (e) => {
        e.preventDefault()
        onSearch(newValue)
    }
    return (
        <form className="" onSubmit={submit}>
            <div className="user-search">
             <ion-icon className="search-icon" style={{fontSize: '20px', position: 'absolute', top: '14px', left: '15px', color: '#12509c'}} name="search-outline"></ion-icon>
             <input className="search" placeholder="Search Github username..." type="search" value={newValue} onChange={event => setValue(event.target.value)} />
            <button className="btn-search">Search</button></div>
        </form>
    )
}