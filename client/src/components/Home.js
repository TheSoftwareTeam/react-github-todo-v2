import React, { Component } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Unstable_Grid2";
import Repo from "./Repo/Repo";
import Todo from "./Todo/Todo";
import TodoDetail from "./TodoDetails/TodoDetail";
import axios from "axios";
import Card from "@mui/material/Card";
class Home extends Component {

  state = { isActive: true, repos: [] };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  getTaskId(taskId) {
    this.setState({
      taskId: taskId,
    }); 
  }


  componentDidMount() {
    this.props.getUserData();
    
    axios
      .get(this.props.userData.repos_url)
      .then((response) => {
        this.setState({
          repos: response.data,
        }); 
 
        console.log(response);
        
      })
      .catch((err) => console.log(err));
      
  }

  render() {

    const isActive = this.state.isActive;
    return (
      <Container fixed>
        
        <Button
          onClick={() => {
            localStorage.removeItem("accessToken");
            this.props.setRerender(!this.props.rerender); 
          }}
          className="btnSignOut"
          variant="contained"
          endIcon={<LogoutIcon />}
          style={{ marginBottom: 10 }}
        >
          Sign Out
        </Button>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar className="appBar" position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ListRepos
              </Typography>
              <GitHubIcon />
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={12}>
            <Grid xs={5}>
              <Card className="reposCard">
                <h3 style={{ fontSize: "24px" }}>My GitHub Repos</h3>
                {this.state.repos.map((r) => (
                  <Repo key={r.id} repo={r} />
                ))}
              </Card>
            </Grid>
            <Grid xs={7}>
              {isActive ? (
                <Todo
                  getTaskId={(taskId) => this.getTaskId(taskId)}
                  handleToggle={this.handleToggle}
                />
              ) : (
                <TodoDetail
                  getTaskId={this.state.taskId}
                  handleToggle={this.handleToggle}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }
}
export default Home;