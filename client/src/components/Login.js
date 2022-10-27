import React, { Component } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

export default class Login extends Component {
  render() {
   
    return (
      <Container fixed>
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
                  this.props.loginWithGithub()
            
                  
                 
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
        
      </Container>
    );
  }
}
