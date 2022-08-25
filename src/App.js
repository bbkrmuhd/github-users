import React, {useEffect, useState} from 'react';
import './App.css';
import GitHubUser from './GithubUser';
import SearchForm from "./SearchForm";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";
import { GraphQLClient } from 'graphql-request';

// import { bigList } from './Faker';
// import List from './List';
// import { FixedSizeList } from 'react-window';


// function App() {
//   const renderItem = item => (
//     <div style={{ display: 'flex' }}>
//       <img src={item.avatar} alt={item.name} width={50} />
//       <p>{item.name} - {item.email}</p>
//     </div>
//     )
//   return (
//     <List data={bigList} renderItem={renderItem} />
//   );
// }


// function App() {
//   const renderRow = ({ index, style}) => (
//     <div style={{  ...style , ...{display: 'flex'} }}>
//       <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
//       <p>{bigList[index].name} - {bigList[index].email}</p>
//     </div>
//     )
//   return (
//     <FixedSizeList
//     height={window.innerHeight}
//     width={window.innerWidth - 20}
//     itemCount={bigList.length}
//     itemSize={50}
//     >
//       {renderRow}
//     </FixedSizeList>
//   );
// }

const query = ` 
query findRepos($login: String!){
    user(login: $login){
      id
      login
      
      name
      location
      avatar_url : avatarUrl
      repositories (first: 100){
        totalCount
        nodes{
          name
        }
      }
    }
        
  }
  `

  const client = new GraphQLClient(
    "https://api.github.com/graphql", 
    {
        headers: {
            Authorization: `Bearer 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`
        }
    }
  )



function App(){
    const [login, setLogin] = useState("")
    const [repo, setRepo] = useState("");

    // const handleSearch = login => {
    //     if (login) return setLogin(login);
    //     setLogin("");
    //     setRepo("");
    // };
    //     if (!login) return (
    //     <SearchForm value={login} onSearch={handleSearch} />
    //     );
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


    
      useEffect(() => {
      client.request(query, { login: login })
      .then(results => JSON.stringify(results, null, 2))
      .then(console.log)
      .catch(console.error);
      }, [client, login, query])

    return (
        <>
        <div className="main">
        <div className='nav'>
          <div>Dev Finder</div>
          <div style={{position: "relative"}}><label onClick={() => changeTheme} htmlFor="toggle" className="label"> <div>Dark</div><ion-icon className="night" name="moon"></ion-icon></label><input className='btn-toggle' type="checkbox" name="toggle" id="toggle" /></div>
        </div>
            <SearchForm value={"bbkrmuhd"} onSearch={setLogin}/>
            {login && <GitHubUser login={login}/>}
      



        </div>
       
        </>

    )
}

export default App;


// {login && <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo}/>}
// {login && repo && <RepositoryReadme login={login} repo={repo} />} 
