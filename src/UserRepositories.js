import React from "react";
import {RepoMenu} from "./RepoMenu";
import Fetch from "./Fetch";


export default function UserRepositories({login, selectedRepo, onSelect = f => f}){
    console.log(selectedRepo)
    return (
    <Fetch uri={`https://api.github.com/users/${login}/repos`} renderSuccess={({ data }) =>(
    <RepoMenu repositories={data} selected={selectedRepo} onSelect={onSelect} />
        )}
    />

    )
}