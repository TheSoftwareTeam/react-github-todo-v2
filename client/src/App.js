import { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

const client_id = "cb9bb57da585db57597f";

function App() {
  const [rerender, setRerender] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    //console.log(codeParam);

    if (codeParam && localStorage.getItem("accessToken") === null) {
      async function getAccessToken() {
        await fetch("http://localhost:4000/getAccessToken?code=" + codeParam, {
          method: "GET",
        })
          .then((response) => {
            console.log(response);
            return response.json();
          })
          .then((data) => {
            if (data.access_token) {
              localStorage.setItem("accessToken", data.access_token);
              setRerender(!rerender);
              console.log(data.access_token);
            }
          });
      }
      getAccessToken();
    }
  });

  async function getUserData() {
    await fetch("http://localhost:4000/getUserData", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }

  function loginWithGithub() {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + client_id
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        {localStorage.getItem("accessToken") ? (
          <>
            <Home
              userData={userData}
              getUserData={getUserData}
              setRerender={setRerender}
              rerender={rerender}
            />
          </>
        ) : (
          <>
            <Login
              getUserData={getUserData}
              loginWithGithub={loginWithGithub}
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
