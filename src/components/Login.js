import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";
import Home from "./Home";
import Box from "@mui/material/Box";


const CLIENT_ID = "cb9bb57da585db57597f";
const REDIRECT_URI = "http://localhost:3000/";

export default class Login extends Component {
  state = { isActive: false };

  login = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  //çalışmadı
  signInWithGithub() {
    axios
      .get(
        `https://github.com/login/oauth/authorize?scope=user&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
      )
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      });
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <Container fixed>
        {isActive ? <Home login={this.login}/> : 

        <Box
          m={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box >
            <Box >
              <h2  className="todoText">React GitHub Todo List </h2>
            </Box>
            <Box >
              <Button
                style={{
                  maxWidth: "350px",
                  maxHeight: "70px",
                  minWidth: "350px",
                  minHeight: "70px",
                  borderRadius: "15px",
                 
                }}
           
                variant="outlined"
                onClick={() => {
                  this.login();
                }}
                startIcon={
                  <GitHubIcon
                    style={{
                      maxWidth: "50px",
                      maxHeight: "50px",
                      minWidth: "50px",
                      minHeight: "50px",
                      marginRight: "20px",
                    }}
                  />
                }
              >
                <h3>Sign in with Github</h3>
              </Button>
            </Box>
          </Box>
        </Box>
        }
      </Container>
    );
  }
}
