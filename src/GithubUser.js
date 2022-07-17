import React, { useState, useEffect} from "react";
import UseFetch from "./hooks";
import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories";

const loadJson = key => 
    key && JSON.parse(localStorage.getItem(key))
const saveJson = (key, data) => 
    localStorage.setItem(key, JSON.stringify(data))

export default function GitHubUser({ login }){
    // const {loading, data, error} = UseFetch(`https://api.github.com/users/${login}`)
    return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}/>
    );
}
function UserDetails({ data }) { return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 200 }}
/> <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
); }

    // useEffect(() => {
    //     if (!login) return;
    //     if (data.login === login) return;
    //     const { name, avatar_url, location } = data;
    //     saveJson(`user:${login}`, { name, login, avatar_url, location})
    // }, [data, login]);

    // useEffect(() => {
    //     if (!login) return;
    //     if (data && data.login === login) return;
    //     setLoading(true);
    //     fetch(`https://api.github.com/users/${login}`)
    //     .then(response => response.json())
    //     .then(setData)
    //     .then(() => setLoading(false))
    //     .catch(setError)
    // }, [login, data]);
    //

//     if (loading) return <h1>loading....</h1>;
//     if (error) return <pre>{ JSON.stringify(error, null, 2)}</pre>;
//
//     if (!data) return;
//
//     return (
//         <div className="githubUser">
//             <img src={data.avatar_url} alt={data.login} style={{ width: 200}} />
//             <div>
//                 <h1>{data.login}</h1>
//                 {data.name && <p>{data.name}</p>}
//                 {data.location && <p>{ data.location }</p>}
//             </div>
//         </div>
//     )
// }