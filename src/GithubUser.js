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
    const date = new Date()

    return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}/>
    );
}
function UserDetails({ data }) { return (
    <div className="github-user">
 
      <div className="parent-image">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{ width: 80 }}
        className="user-image"
        /> 

      <div></div>
      </div>

<div className="user-details">
  <div className="parent-name">
  <div className="name"> {data.name && <h4>{data.name}</h4>} 
  <p className="username">{data.login}</p>

  </div>
  <div className="date-created"> {data.created_at && <h4>{data.created_at}</h4>}
    </div>
    </div>
    <div className="user-bio">Bio: {data.bio && <p>{data.bio}</p>}</div>

<div className="parent-stats">
<div className="stats">
  <p  className="child">Repos</p>
  {data.public_repos && <p>{data.public_repos}</p>}
</div>
<div className="stats"> 
<p className="child">Followers</p>
{data.followers && <p>{data.followers}</p>}
</div>
<div className="stats">
  <p  className="child">following</p>
{data.following && <p>{data.following}</p>}
</div>
</div>

<div className="last-section">  
  <div className="location-link">
    <div className="inline"><ion-icon name="location-outline"></ion-icon> {data.location && <p>{data.location}</p>}</div>
    <div className="inline"><ion-icon name="link-outline"></ion-icon> {data.blog && <p>{data.blog}</p>}</div>
  </div>

  <div className="twitter-home">
    <a href={"https://twitter.com/" + data.twitter_username } className="inline link"><ion-icon name="logo-twitter"></ion-icon> {data.twitter_username && <p>@{data.twitter_username}</p>} </a>
    <a href={data.html_url} className="inline link"><ion-icon name="home-outline"></ion-icon> {data.html_url && <p>{data.html_url}</p>}</a>
  </div>

</div>


  

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