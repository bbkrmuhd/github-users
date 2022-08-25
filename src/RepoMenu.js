import React, { useEffect} from "react";
import {useIterator} from "./Iterators";
import RepositoryReadme from "./RepositoryReadme";


export function RepoMenu({ repositories, selected, onSelect = f => f }){
    const [{name}, previous, next] = useIterator(repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null)

    useEffect(() => {
        if (!name) return;
        onSelect(name)
    }, [name])

    return (
        <div style={{ display: "flex"}} className="selectors">
            <button className="btn-repo" onClick={previous} >&lt;</button>
            <p className="repo-name">{name}</p>
            <button  className="btn-repo" onClick={next}>&gt;</button>
        </div>
    )
}