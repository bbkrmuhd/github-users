import React, {useEffect, useState} from 'react';
import './App.css';
import GitHubUser from './GithubUser';
import SearchForm from "./SearchForm";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";
import { GraphQLClient } from 'graphql-request';



function App(){
    const [login, setLogin] = useState("")
    const [repo, setRepo] = useState("");

   
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");

    // To automatically detect and set theme

    if (currentTheme === "dark") {
        document.body.classList.toggle("dark-theme");
    } else if (currentTheme === "light") {
        document.body.classList.toggle("light-theme");
    }

  //  To give user ability to change theme

    const changeTheme = () => {
      if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
    } else {
       document.body.classList.toggle("dark-theme");
       var theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
     }
    localStorage.setItem("theme", theme);

    }


    return (
        <>
        <div className="main">
        <div className='nav'>
          <div>Dev Finder</div>
          <div style={{position: "relative"}}><label onClick={() => changeTheme()} htmlFor="toggle" className="label"> <div>Dark</div><ion-icon className="night" name="moon"></ion-icon></label><input className='btn-toggle' type="checkbox" name="toggle" id="toggle" /></div>
          {/* <div style={{position: "relative"}}><label onClick={() => changeTheme} htmlFor="toggle" className="label"> <div>Light</div><ion-icon className="night" name="sunny"></ion-icon></label><input className='btn-toggle' type="checkbox" name="toggle" id="toggle" /></div> */}
        </div>
            <SearchForm value={"bbkrmuhd"} onSearch={setLogin}/>
            {login && <GitHubUser login={login}/>}
            {login && <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo}/>}
            {login && repo && <div className='repo-readme'><RepositoryReadme login={login} repo={repo} /></div>}

        </div>
       
        </>

    )
}

export default App;


